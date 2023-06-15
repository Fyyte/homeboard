<script>
	import gigachad from '$lib/assets/gigachad.png';
	import wallstreetbets from '$lib/assets/wallstreetbets.png';
	import trollFace from '$lib/assets/troll-meme.png';
	import mkbhd from '$lib/assets/mkbhd.png';
	import Offis from '$lib/components/Offis.svelte';
</script>

<section class="content">
	<div class="featured" />
	<Offis />
</section>

<style lang="postcss">
	h2 {
		color: var(--color-primary-500);
		margin-top: 3rem;
	}
	p {
		font: var(--text-xl);
	}
	strong {
		color: var(--color-primary);
	}

	.featured {
		margin-block: 3rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 3rem;
	}
</style>
