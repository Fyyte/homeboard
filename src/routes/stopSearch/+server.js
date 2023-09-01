import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	const stopIdsParam = url.searchParams.get('stopid');
	const stopIds = stopIdsParam.split(',');

	const requests = stopIds.map((stopId) =>
		fetch(`https://www.wienerlinien.at/ogd_realtime/monitor?stopid=${stopId}`)
	);

	const responses = await Promise.all(requests);
	const dataAll = await Promise.all(responses.map((res) => res.json()));

	// Filter out responses where monitors array is empty or undefined
	const validData = dataAll.filter((data) => data.data.monitors && data.data.monitors.length > 0);

	if (validData.length === 0) {
		// If after filtering, no valid data remains, return an empty array or an error message
		return json({ error: 'No monitors data available' });
	}

	const titles = validData.map((data) => data.data.monitors[0].locationStop.properties.title);

	// Check if all titles are the same
	const allSameTitle = titles.every((title) => title === titles[0]);

	if (allSameTitle) {
		// Merge lines arrays if all titles are the same
		const mergedLines = validData.flatMap((data) =>
			data.data.monitors.flatMap((monitor) => monitor.lines)
		);

		// Retain one instance of the monitors and replace its lines with the mergedLines
		const representativeMonitor = validData[0].data.monitors[0];
		representativeMonitor.lines = mergedLines;

		return json([representativeMonitor]);
	} else {
		const mergedMonitors = validData.flatMap((data) => data.data.monitors);
		return json(mergedMonitors);
	}
};
