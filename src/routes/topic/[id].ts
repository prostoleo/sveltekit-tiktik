import { topicPostsQuery } from '@utils/queries';
import { useSanityClient } from '@utils/sanityClient';
// import { page } from '$app/stores';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ request, params }) {
	console.log('params: ', params);

	// console.log('request: ', request);
	// // useSanityClientconsole.log();
	// console.log('request.url: ', request.url);
	// console.log('request.url.searchParams: ', request.url.searchParams);

	/* const query = new URLSearchParams(requestData.url.search);
	console.log('query: ', query);
	// console.log('params: ', params);
	const topic = query.get('topic');
	console.log('topic: ', topic); */

	// const topic = request.url.searchParams.get('topic');
	// console.log('topic: ', topic);

	const sanity = useSanityClient();
	// console.log('sanity: ', sanity);
	// console.log('params.topic: ', params.topic);

	// const topicPosts = await sanity.fetch(topicPostsQuery(topic));
	const topicPosts = await sanity.fetch(topicPostsQuery(params.id));
	// console.log('posts: ', posts);

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
