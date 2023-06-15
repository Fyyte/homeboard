<script>
	export let noStyle = false;
</script>

<div class={noStyle ? '' : 'style'}>⏳</div>

<style lang="postcss">
	div {
		width: var(--size-8);
		aspect-ratio: 1;
		animation: rotation 1.5s linear infinite;
	}

	.style {
		font-size: var(--size-8);
	}
	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
