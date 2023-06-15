<script>
	import { getRandomEmoji } from '$lib/utils/random_emoji';
</script>

<footer>
	<nav>
		<ul>
			<li><a href="/privacy">🔐 Privacy</a></li>
			<li><a href="/terms">📜 Terms of Service</a></li>
			<li><a href="mailto:support@marduk.xyz">📩 support@marduk.xyz</a></li>
		</ul>
	</nav>
	<!-- 	<nav>
		<ul>
			<li>{getRandomEmoji()}</li>
			<li>{getRandomEmoji()}</li>
			<li>{getRandomEmoji()}</li>
		</ul>
	</nav> -->
	<small>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s.
	</small>
</footer>

<style lang="postcss">
	.link {
		color: var(--color-primary-500);
		text-decoration: none;
	}
	footer {
		text-align: center;
		padding: var(--size-content-py) var(--size-content-px);
	}
	nav {
		margin-block: var(--size-20);
	}
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-4);
		& a {
			font-size: var(--scale-2);
			color: var(--color-primary-500);
			font-weight: var(--weight-bold);
			text-decoration: none;
		}
	}
	small {
		display: block;
		margin-top: var(--size-8);
		text-align: left;
	}
</style>
