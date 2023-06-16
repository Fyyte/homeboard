<script>
	import Calendar from '$lib/components/Calendar.svelte';
	import Offis from '$lib/components/Offis.svelte';
	import Plausible from '$lib/components/Plausible.svelte';
</script>

<section class="content">
	<div class="displayArea">
		<Offis />
		<Plausible />
		<Calendar />
	</div>
</section>

<style lang="postcss">
	.displayArea {
		display: flex;
		flex-direction: column;
	}
</style>
