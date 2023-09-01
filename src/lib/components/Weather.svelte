<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const id = 'weatherwidget-io-js';
		if (!document.getElementById(id)) {
			const script = document.createElement('script');
			script.id = id;
			script.src = 'https://weatherwidget.io/js/widget.min.js';
			document.body.appendChild(script);
		}
	});
</script>

<!-- <a
	class="weatherwidget-io"
	href="https://forecast7.com/de/48d2116d37/vienna/"
	data-label_1="VIENNA"
	data-label_2="1050"
	data-font="Consolas"
	data-icons="Climacons Animated"
	data-days="3"
	data-theme="weather_one">VIENNA 1050</a
> -->
