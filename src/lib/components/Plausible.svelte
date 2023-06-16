<script>
	import fliese_clean from '$lib/assets/fliese_clean.png';
	export let live = '?';
	export let last7days = '?';
</script>

<div class="center">
	<div class="card">
		<div class="chip">
			<img src={fliese_clean} alt="fliese_clean" />
			<span>{`${live}/${last7days}`}</span>
		</div>
	</div>
</div>

<style lang="postcss">
	.card {
		background-color: #000;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		padding: 20px;
		margin: 20px;
		color: #18b955;
		font-size: 20px;
		font-family: 'Press Start 2P', sans-serif;
	}
	.chip {
		display: inline-block;
		height: 128px;
		font-size: 128px;
		line-height: 128px;
		border-radius: 25px;
	}
	span {
		margin-left: 25px;
	}

	.chip img {
		float: left;
		height: 128px;
		width: 128px;
	}
</style>
