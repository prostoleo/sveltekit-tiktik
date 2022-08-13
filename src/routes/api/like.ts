import type { IPost } from '@models';
import { useSanityClient } from '@utils/sanityClient';
import { v4 as uuidv4 } from 'uuid';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function PUT({ request }) {
	try {
		const body = await request.json();
		const { likeData } = body;
		const { userId, postId, like } = likeData;
		const sanity = useSanityClient();
		const data: IPost = like
			? await sanity
					.patch(postId)
					.setIfMissing({ likes: [] })
					.insert('after', 'likes[-1]', [
						{
							_key: uuidv4(),
							_ref: userId
						}
					])
					.commit()
			: await sanity
					.patch(postId)
					.unset([`likes[_ref=="${userId}"]`])
					.commit();

		return {
			status: 200,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: {
				ok: true,
				data
			}
		};
	} catch (error) {
		return {
			status: 404
		};
	}
}
