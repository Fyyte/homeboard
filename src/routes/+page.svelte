<script>
	import Offis from '$lib/components/Offis.svelte';
	import { onMount } from 'svelte';

	export let data; // ['4410', '4427', '4116', '4113'];
	let monitors;
	let lastUpdated = new Date();
	let timeSinceLastRefetch;

	async function stopSearch() {
		try {
			const response = await fetch('/stopSearch?stopid=' + data.stopids.join(','));

			if (!response.ok) {
				throw new Error(`API returned status code: ${response.status}`);
			}

			const responseData = await response.json();
			if (responseData.error) {
				monitors = [];
				throw new Error(responseData.error);
			} else {
				monitors = [...responseData];
			}
		} catch (error) {
			console.error('An error occurred:', error);
		} finally {
			lastUpdated = new Date();
		}
	}

	function updateCounter() {
		timeSinceLastRefetch = (new Date().getTime() - lastUpdated.getTime()) / 1000;
	}

	onMount(() => {
		if (data.stopids.length === 0) return;
		const searchInterval = setInterval(() => stopSearch(), 30000);
		stopSearch();

		const counterInterval = setInterval(updateCounter, 1000);
		updateCounter(); // initial update

		return () => {
			clearInterval(searchInterval);
			clearInterval(counterInterval);
		};
	});
</script>

{#if data.stopids.length === 0}
	<section class="content">
		<h1>Keine Haltestellen angegeben</h1>
		<p>
			Beispiel : <a href="https://homeboard.bleff.xyz/?stopids=1409">
				https://homeboard.bleff.xyz/?stopids=1409</a
			>
		</p>
	</section>
{:else}
	<Offis {monitors} secondsSinceLastRefetch={Math.floor(timeSinceLastRefetch)} />
{/if}
