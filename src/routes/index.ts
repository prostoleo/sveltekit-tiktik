import { allPostsQuery, topicPostsQuery } from '@utils/queries';
import { useSanityClient } from '@utils/sanityClient';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
	/* const topic = url?.searchParams?.get('topic') || null;
	console.log('topic: ', topic); */

	// useSanityClientconsole.log();
	const sanity = useSanityClient();
	// console.log('sanity: ', sanity);

	/* let posts;

	if (topic) {
		posts = await sanity.fetch(topicPostsQuery(topic));
	} else {
		posts = await sanity.fetch(allPostsQuery);
	} */

	const posts = await sanity.fetch(allPostsQuery);
	// console.log('posts: ', posts);

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			// number: Math.random(),
			posts: posts
			// posts: Math.random()
		}
	};
}
