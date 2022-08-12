// import type { RequestHandler, RequestEvent } from '@sveltejs/kit';
import { allUsersQuery } from '@utils/queries';
import { useSanityClient } from '@utils/sanityClient';
// import { page } from '$app/stores';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const sanity = useSanityClient();
	const allUsers = await sanity.fetch(allUsersQuery());
	// console.log('allUsers: ', allUsers);

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			// number: Math.random(),
			allUsers
		}
	};
}
