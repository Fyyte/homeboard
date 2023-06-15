import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	register: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		data.emailVisibility = true;
		try {
			const newUser = await locals.pb.collection('users').create(data);

			await locals.pb.collection('users').requestVerification(newUser.email);

			const { token, user } = await locals.pb
				.collection('users')
				.authWithPassword(data.email, data.password);
		} catch (err) {
			console.log('Error:', err);
			// TODO handle error in frontend
			return {
				error: true,
				message: 'Could not create user'
			};
		}

		throw redirect(303, '/login');
	}
};
