import { useSanityClient } from '@utils/sanityClient';
// import { page } from '$app/stores';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	try {
		const body = await request.json();
		console.log('body: ', body);
		const { selectedFile } = body;
		console.log('selectedFile: ', selectedFile);
		// console.log({ userId, postId, like });
		const sanity = useSanityClient();
		const data = await sanity?.assets.upload('file', selectedFile);
		console.log('data: ', data);

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
