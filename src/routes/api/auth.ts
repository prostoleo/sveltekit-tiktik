import { useSanityClient } from '@utils/sanityClient';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	const user = await request.json();
	const sanity = useSanityClient();
	const res = await sanity.createIfNotExists(user);

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
