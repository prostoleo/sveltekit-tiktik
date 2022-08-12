import { userCreatedPostsQuery, singleUserQuery, userLikedPostsQuery } from '@utils/queries';
import { useSanityClient } from '@utils/sanityClient';
// import { page } from '$app/stores';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
	// console.log('params: ', params);

	const sanity = useSanityClient();

	const { id } = params;

	const query = singleUserQuery(id);
	const userVideosQuery = userCreatedPostsQuery(id);
	const userLikedVideosQuery = userLikedPostsQuery(id);

	const [user, userVideos, userLikedVideos] = await Promise.all([
		sanity.fetch(query),
		sanity.fetch(userVideosQuery),
		sanity.fetch(userLikedVideosQuery)
	]);

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			// number: Math.random(),
			user: user[0],
			userVideos,
			userLikedVideos
		}
	};
}
