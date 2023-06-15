import { getContext, setContext } from 'svelte';

const _key = {};

type PbUser = {
	username: string;
	email: string;
	id: string;
};

export const setAuthContext = (user: PbUser) => {
	if (!user) return;
	setContext(_key, user);
};
export const getAuthContext = (): PbUser => {
	return getContext(_key);
};
