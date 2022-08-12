import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import jwtDecode from 'jwt-decode';

export interface IGoogleResponse {
	clientId: string;
	credential: string;
	select_by: string;
}

export interface IUser {
	_id: string;
	_type: 'user';
	userName: string;
	image: string;
}

export interface IUserData {
	iss: string;
	nbf: number;
	aud: string;
	sub: string;
	email: string;
	email_verified: boolean;
	azp: string;
	name: string;
	picture: string;
	given_name: string;
	family_name: string;
	iat: number;
	exp: number;
	jti: string;
}

export const user = writable(null) as Writable<IUser | null>;
export const allUsers = writable(null) as Writable<IUser[] | null>;
export const isLogin = writable(false) as Writable<boolean>;

//=============
//* getters
export function getUser() {
	return get(user);
}

export function getAllUsers() {
	return get(allUsers);
}

//=============
//* actions
export function createOrGetUser(response: IGoogleResponse): IUser {
	const userData: IUserData = jwtDecode(response.credential);

	const { name, picture, sub } = userData;

	const userSanity: IUser = {
		_id: sub,
		_type: 'user',
		userName: name,
		image: picture
	};
	console.log('userSanity: ', userSanity);

	user.set(userSanity);

	return get(user);
}

export function setUser(userInfo: IUser | null) {
	if (!userInfo) {
		return;
	}

	user.set(userInfo);
}

export function clearUser() {
	user.set(null);
	setIsLoginFalse();
}

export function setUserFromCookieUser(userInfo: IUser | null) {
	if (!userInfo) return;

	setUser(userInfo);
}

export function setIsLoginTrue() {
	isLogin.set(true);
}

export function setIsLoginFalse() {
	isLogin.set(false);
}

export async function fetchAllUsers() {
	try {
		const data = await fetch(`/api/users`).then((res) => res.json());
		// console.log('allUsers - store: ', data);
		// console.log('allUsers - store: ', data.allUsers);

		if (!data) {
			throw new Error(`failed to fetch all users`);
		}

		allUsers.set(data.allUsers);
	} catch (error) {
		console.log('error: ', error);
		throw error;
	}
}
