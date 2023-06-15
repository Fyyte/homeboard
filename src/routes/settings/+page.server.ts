import { redirect } from '@sveltejs/kit';
export const actions = {
	settings: async ({ locals }) => {
		try {
			await locals.pb.collection('users').delete(locals.user.id);
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: 'Invalid Request'
			};
		}
		locals.pb.authStore.clear();
		locals.user = undefined;
		throw redirect(303, '/');
	}
};
