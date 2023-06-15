import PocketBase from 'pocketbase';
import * as dotenv from 'dotenv';
dotenv.config();

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(process.env.POCKETBASE_URL ?? 'https://b.marduk.xyz');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = event.locals.pb.authStore.model;
	}

	const response = await resolve(event);

	// TODO: secure before deployment
	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: true, sameSite: 'Lax' })
	);

	return response;
};
