<script>
	export let monitors;
	export let secondsSinceLastRefetch;
</script>

<div class="card">
	{#if !monitors}
		Loading...
	{:else}
		{#each monitors as monitor}
			<h1>{monitor.locationStop.properties.title}</h1>
			{#each monitor.lines as line}
				<div class="line">
					<div class="name">[{line.name}]</div>
					<div class="direction">{line.towards}</div>
					<div class="next">{line.departures.departure[0].departureTime.countdown} min</div>
				</div>
				<div class="line">
					<div class="name">[{line.name}]</div>
					<div class="direction">{line.towards}</div>
					<div class="after">{line.departures.departure[1].departureTime.countdown} min</div>
				</div>
			{/each}
		{/each}
		<h2>Fetched {secondsSinceLastRefetch} seconds ago</h2>
	{/if}
</div>

<style lang="postcss">
	h1 {
		font-size: 8vw;
		color: #ffcc66;
	}
	h2 {
		font-size: 4vw;
		color: #ffcc66;
		margin-top: var(--size-20);
	}
	.card {
		background-color: #004e2b;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		padding: 20px;
		margin: 25px;
		color: #ffcc66;
		font-size: 20px;
	}

	.line {
		font-size: 4vw;
		margin-block: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
