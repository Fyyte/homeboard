export async function load({ url }) {
	// Retrieve the stopids parameter from the page's query
	const stopidsParam = url.searchParams.get('stopids');

	// If you want to convert the comma-separated string to an array of stopids
	const stopids = stopidsParam ? stopidsParam.split(',') : [];

	// Fetch data or do other things with the stopids here, if necessary

	return {
		stopids
	};
}
