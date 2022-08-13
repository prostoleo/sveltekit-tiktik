import { topicPostsQuery } from '@utils/queries';
import { useSanityClient } from '@utils/sanityClient';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
	const sanity = useSanityClient();
	const topicPosts = await sanity.fetch(topicPostsQuery(params.id));

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			// number: Math.random(),
			topicPosts: topicPosts
		}
	};
}
/* export async function POST({ request }) {
	// debugger;
	const requestData = await request.json();
	console.log('requestData: ', requestData);
	// requestData.body;
	// console.log('requestData.body: ', requestData.body);
	// const topic = request.url.searchParams.get('topic');
	// console.log('topic: ', topic);

	const sanity = useSanityClient();
	// console.log('sanity: ', sanity);
	const topic = requestData.topic;

	if (!topic) {
		return {
			status: 404
			//  headers: {
			// 	'access-control-allow-origin': '*'
			// },
			// body: {
			// 	// number: Math.random(),
			// 	// topicPosts: topicPosts
			// 	// topic: requestData.body
			// } 
		};
	}

	let topicPosts = await sanity.fetch(topicPostsQuery(topic));
	// console.log('posts: ', posts);

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			// number: Math.random(),
			topicPosts: topicPosts
			// topic: requestData.body
		}
	};
} */
