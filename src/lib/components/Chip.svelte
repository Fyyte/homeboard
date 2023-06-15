<script lang="ts">
	import Fa from 'svelte-fa';
	import { faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { removeItemFromArray } from '$lib/utils/utils';
	import Spinner from './Spinner.svelte';

	export let src: any;
	export let srcList: any;
	export let edit = false;
	export let loading = false;

	const deleteFromList = async (src) => {
		if (confirm('Are you sure you want to delete this source from your list?')) {
			const update = {
				...srcList,
				srcs: removeItemFromArray(srcList.srcs, src)
			};
			const res = await fetch(`/${srcList.id}/update`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(update)
			});
			const json = await res.json();
			if (json.error) {
				console.log(json.message);
			} else {
				location.reload();
			}
		} else {
			// Do nothing!
		}
	};
</script>

<div class="chip">
	<div class="chip__content">
		{#if src.includes('twitter')}
			<Fa icon={faTwitter} primaryColor="#1e9cf1" />&nbsp;<a
				target="_blank"
				href={`https://twitter.com/${src.split('@')[1]}`}>{src.split('@')[1]}</a
			>
		{:else if src.includes('hackernews')}
			<a target="_blank" href={`https://news.ycombinator.com/${src.split('@')[1]}`}> 🚀 {src}</a>
		{:else if src.includes('reddit')}
			<Fa icon={faReddit} primaryColor="#ff4600" />&nbsp;<a
				target="_blank"
				href={`https://reddit.com/r/${src.split('@')[1]}`}>{src.split('@')[1]}</a
			>
		{:else if src.includes('rss')}
			🌐 {src.split('@')[1]}
		{/if}
		{#if edit && !src.includes('add')}
			<button on:click={() => deleteFromList(src)} title="delete">❌</button>
		{/if}
		{#if !edit && !src.includes('add') && loading}
			<Spinner noStyle={true} />
		{/if}
	</div>
</div>

<style>
	a {
		cursor: pointer;
		text-decoration: none;
	}
	.chip {
		/* Center the content */
		align-items: center;
		display: inline-flex;
		justify-content: center;

		/* Background color */
		background-color: rgba(0, 0, 0, 0.1);

		/* Rounded border */
		border-radius: 9999px;

		/* Spacing */
		padding: 4px 8px;
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
	}

	.chip__content {
		margin-right: 4px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>
