<script>
	import Dinput from '$lib/components/Dinput.svelte';
	export let form;
</script>

<section class="content center">
	<h2>Register for an account</h2>
	<p class="text-center mt-1">
		Or <a href="/login">sign in</a> if you already have an account.
	</p>
	<form method="POST" action="?/register">
		<div class="form">
			<Dinput type="text" name="username" placeholder="username" />
			<Dinput type="email" name="email" placeholder="email" />
			<Dinput type="password" name="password" placeholder="password" />
			<Dinput type="password" name="passwordConfirm" placeholder="password confirm" />
		</div>
		{#if form?.error}
			<p><strong>Register failed: </strong> {form?.message}</p>
		{/if}
		<button>submit</button>
	</form>
</section>

<style lang="postcss">
	strong {
		color: var(--color-red);
	}
	.form {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
	}
	button {
		height: 60%;
		float: right;
		margin: var(--size-4);
	}
</style>
