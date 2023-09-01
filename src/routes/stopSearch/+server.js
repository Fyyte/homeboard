import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	const stopIdsParam = url.searchParams.get('stopid');
	const stopIds = stopIdsParam.split(',');

	const requests = stopIds.map((stopId) =>
		fetch(`https://www.wienerlinien.at/ogd_realtime/monitor?stopid=${stopId}`)
	);

	const responses = await Promise.all(requests);
	const dataAll = await Promise.all(responses.map((res) => res.json()));

	const titles = dataAll.map((data) => data.data.monitors[0]?.locationStop.properties.title);

	// Check if all titles are the same
	const allSameTitle = titles.every((title) => title === titles[0]);

	if (allSameTitle) {
		// Merge lines arrays if all titles are the same
		const mergedLines = dataAll.flatMap((data) =>
			data.data.monitors.flatMap((monitor) => monitor.lines)
		);

		// Retain one instance of the monitors and replace its lines with the mergedLines
		const representativeMonitor = dataAll[0].data.monitors[0];
		representativeMonitor.lines = mergedLines;

		return json([representativeMonitor]);
	} else {
		const mergedMonitors = dataAll.flatMap((data) => data.data.monitors);
		return json(mergedMonitors);
	}
};
