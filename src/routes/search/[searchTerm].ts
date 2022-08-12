import { searchPostsQuery } from '@utils/queries';
import { useSanityClient } from '@utils/sanityClient';
// import { page } from '$app/stores';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
	// console.log('params: ', params);

	const sanity = useSanityClient();
	const searchTerm = params.searchTerm;

	const videosQuery = searchPostsQuery(searchTerm);

	const data = await sanity.fetch(videosQuery);

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			// number: Math.random(),
			videos: data
		}
	};
}
