import * as dotenv from 'dotenv';
dotenv.config();
import PocketBase from 'pocketbase';
const client = new PocketBase('https://b.marduk.xyz');
const adminLogin = async () => {
	return await client.admins.authWithPassword(
		process.env.POCKETBASE_ADMIN_USERNAME ?? 'check your .env file',
		process.env.POCKETBASE_ADMIN_PASSWORD ?? 'check your .env file'
	);
}; // TODO refactor db auth

export const getSrcList = async (id: string) => {
	await adminLogin();
	return await client.collection('srclists').getOne(id);
};

export const listAuthMethods = async () => {
	return await client.collection('users').listAuthMethods();
};
