import { serializeNonPOJOs } from '$lib/utils/utils';

export const load = ({ locals }) => {
	if (locals.user) {
		return {
			user: serializeNonPOJOs(locals.user)
		};
	}
};
