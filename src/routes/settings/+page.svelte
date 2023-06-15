<script>
	const deleteAccount = async (e) => {
		confirm('Are you sure you want to delete this list?');
	};
</script>

<section class="content center">
	<h1>Settings</h1>
	<form method="POST" action="?/settings">
		<button>DELETE ACCOUNT</button>
	</form>
	<p>
		Deleting your account will delete all of your lists and notes.<br /> This action cannot be undone.
	</p>
</section>

<style lang="postcss">
	h1 {
		margin-bottom: 3rem;
	}
	p {
		hyphens: auto;
		text-align: justify;
	}
	button {
		background: var(--color-red);
		color: white;
		margin: var(--size-4);
	}
</style>
