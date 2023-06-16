<script lang="ts">
	import { navigating } from '$app/stores';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Weather from '$lib/components/Weather.svelte';
	import '$lib/style/app.css';
	import Spinner from '$lib/components/Spinner.svelte';
	import { setAuthContext } from '$lib/auth-context';
	export let data;
	setAuthContext(data.user);
</script>

<main>
	<Weather />
	{#if $navigating}
		<div class="spinner">
			<Spinner />
		</div>
	{:else}
		<slot />
	{/if}
</main>

<style lang="postcss">
	main {
		margin: 0;
	}
	.spinner {
		margin-top: var(--size-8);
		display: grid;
		place-items: center;
	}
</style>
