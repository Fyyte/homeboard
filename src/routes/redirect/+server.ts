import { redirect } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals, url, cookies }: RequestEvent) => {
	const redirectURL = `${url.origin}/redirect`;
	const expectedState = cookies.get('state');
	const provider = JSON.parse(cookies.get('provider')).provider;

	const query = new URLSearchParams(url.search);
	const state = query.get('state');
	const code = query.get('code');

	if (!provider) {
		console.log('Provider not found');
		throw redirect(303, '/login');
	}

	if (expectedState !== state) {
		console.log('state does not match expected', expectedState, state);
		throw redirect(303, '/login');
	}

	try {
		await locals.pb
			.collection('users')
			.authWithOAuth2(provider.name, code || '', provider.codeVerifier, redirectURL);
	} catch (err) {
		console.log('Error logging in with 0Auth user', err);
		throw redirect(303, '/authError');
	}

	throw redirect(303, '/');
};
