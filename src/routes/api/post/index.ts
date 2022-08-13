import type { IPost } from '@models';
import { useSanityClient } from '@utils/sanityClient';
import { v4 as uuidv4 } from 'uuid';
// import { page } from '$app/stores';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	try {
		const body = await request.json();
		const { post } = body;
		console.log('post: ', post);
		// console.log({ userId, postId, like });
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
