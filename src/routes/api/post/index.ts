import { useSanityClient } from '@utils/sanityClient';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	try {
		const body = await request.json();
		const { post } = body;
		const sanity = useSanityClient();
		const data = await sanity.create(post);

		return {
			status: 200,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: {
				ok: true,
				// number: Math.random(),
				data
			}
		};
	} catch (error) {
		return {
			status: 404
		};
	}
}
