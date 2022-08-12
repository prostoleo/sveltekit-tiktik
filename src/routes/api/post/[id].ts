import type { IPost } from '@models';
import { useSanityClient } from '@utils/sanityClient';
import { v4 as uuidv4 } from 'uuid';
// import { page } from '$app/stores';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function PUT({ request, params }) {
	try {
		const body = await request.json();
		const { commentData } = body;
		const { userId, comment } = commentData;
		// console.log({ userId, postId, like });
		const sanity = useSanityClient();
		const data = await sanity
			.patch(params.id)
			.setIfMissing({ comments: [] })
			.insert('after', 'comments[-1]', [
				{
					comment,
					_key: uuidv4(),
					postedBy: { _type: 'postedBy', _ref: userId }
				}
			])
			.commit();

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
