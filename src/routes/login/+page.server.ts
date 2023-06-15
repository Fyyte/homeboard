import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, url }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
	const authMethods = await locals.pb?.collection('users').listAuthMethods();
	if (!authMethods) {
		return {
			authProviderRedirect: '',
			authProviderState: ''
		};
	}
	const redirectURL = `${url.origin}/redirect`;

	const resArray = authMethods.authProviders.map((provider) => {
		const authProviderRedirect = `${provider.authUrl}${redirectURL}`;
		const authProviderState = provider.state;
		return {
			provider: {
				name: provider.name,
				codeVerifier: provider.codeVerifier,
				codeChallenge: provider.codeChallenge
			},
			authProviderRedirect,
			authProviderState
		};
	});

	return {
		authProviders: resArray
	};
};

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const { token, user } = await locals.pb
				.collection('users')
				.authWithPassword(data.email, data.password);
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: 'Invalid email or password',
				email: data.email
			};
		}
		throw redirect(303, '/');
	}
};
