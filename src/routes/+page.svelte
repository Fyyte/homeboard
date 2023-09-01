<script>
	import Offis from '$lib/components/Offis.svelte';
	import { onMount } from 'svelte';

	export let data; // ['4410', '4427', '4116', '4113'];
	let monitors;
	let lastUpdated = new Date();
	let timeSinceLastRefetch;

	async function stopSearch() {
		const response = await fetch('/stopSearch?stopid=' + data.stopids.join(','));
		const responseData = await response.json(); // Renamed to responseData
		monitors = [...responseData]; // Using responseData
		lastUpdated = new Date();
	}

	function updateCounter() {
		timeSinceLastRefetch = (new Date().getTime() - lastUpdated.getTime()) / 1000;
	}

	onMount(() => {
		const searchInterval = setInterval(() => stopSearch(), 10000);
		stopSearch();

		const counterInterval = setInterval(updateCounter, 1000);
		updateCounter(); // initial update

		return () => {
			clearInterval(searchInterval);
			clearInterval(counterInterval);
		};
	});
</script>

<Offis {monitors} secondsSinceLastRefetch={Math.floor(timeSinceLastRefetch)} />
