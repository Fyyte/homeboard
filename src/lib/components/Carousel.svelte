<script lang="ts">
	export let images: string[] = [];

	let index = 0;

	const next = () => {
		index = (index + 1) % images.length;
	};
</script>

<div class="carousel">
	{#each [images[index]] as src (index)}
		<!-- TODO cache images -->
		<img {src} alt="" />
	{/each}
	{#if images.length >= 2}
		<button on:click={next}>↔️ {`${index + 1}/${images.length}`}</button>
	{/if}
</div>

<style lang="postcss">
	.carousel {
		position: relative;
		& img {
			/* TODO refactor make responsive */
			width: 100%;
			height: auto;
		}
		& button {
			position: absolute;
			top: 90%;
			left: 50%;
			transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			background-color: var(--color-primary);
			border: none;
			cursor: pointer;
			border-radius: 5px;
			opacity: 0.6;
		}
	}
</style>
