// import { allUsersQuery } from '@utils/queries';
import { useSanityClient } from '@utils/sanityClient';
// import { page } from '$app/stores';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	// const body = await event.request.json();
	// const requestData = await request.json();
	// console.log('requestData: ', requestData);
	// const user = requestData?.user;
	const user = await request.json();
	// console.log('body: ', body);
	console.log('user: ', user);
	const sanity = useSanityClient();
	const res = await sanity.createIfNotExists(user);
	console.log('res: ', res);

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			ok: true,
			// number: Math.random(),
			res
		}
	};
}
