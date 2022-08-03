<script lang="ts">
	import type { IPost } from '@models';
	// export let number: number;
	export let posts: IPost[];
	// import { allPostsQuery, topicPostsQuery } from '@utils/queries';
	import VideoCard from '@components/video/VideoCard.svelte';
	import NoResults from '@components/video/NoResults.svelte';
	import { page } from '$app/stores';
	// import.meta.env.VITE_PUBLIC_BASE_PATH;
	// import { PUBLIC_BASE_URL } from '$env/static/public';
	// console.log('PUBLIC_BASE_URL: ', PUBLIC_BASE_URL);
	// console.log('import.meta.env: ', import.meta.env);
	// console.log('posts: ', posts);
	let dataToShow = posts;
	// console.log(`$page?.url?.searchParams?.get('topic'): `, $page?.url?.searchParams?.get('topic'));
	/* $: topic = $page?.url?.searchParams?.get('topic') || null; */
	// console.log('topic: ', topic);

	/* async function handleData(top: string): Promise<void> {
		// debugger;
		if (!top || !top?.toString()) {
			// const response = await fetch(`/`);
			// console.log('response: ', response);
			// const data: IPost[] = await response.json();

			// dataToShow = data?.posts;
			dataToShow = posts;
			return;
		}

		// if (top.toString()) {
		// debugger;
		// const response = await fetch(`/api/topic?topic=${top}`);
		// 	console.log('response: ', response);
		console.log('top: ', top);
		// console.log('topic.toString(): ', topic.toString());
		// const response = await fetch(`/api/topic`, {
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		// topic: topic.toString()
		// 		topic: top
		// 	})
		// });
		const response = await fetch(`/api/topic/${top}`);
		// const response = await fetch(`/?topic=${top}`);
		console.log('response: ', response);
		const data: IPost[] = await response.json();

		console.log('data: ', data);
		dataToShow = data?.topicPosts;
		// }
	} */

	// $: handleData(topic);

	/* $: {
		if (topic || topic?.length > 0) {
			// (async () => {
			// 	const data = await fetch(`/api/topic/?topic=${topic}`);
			// 	console.log('data: ', data);
			// })();
			handleData(topic);
		} else {
			dataToShow = posts;
		}
	} */
</script>

<!-- <h1 class="text-red-500 hover:text-indigo-500">hello</h1> -->

<!-- <div>{number}</div> -->

{#if dataToShow.length > 0}
	<!-- content here -->
	{#each dataToShow as post (post._id)}
		<VideoCard {post} />
	{/each}
{:else}
	<!-- else content here -->
	<NoResults text={`no results found`} />
{/if}

<!-- <div>{JSON.stringify(posts[0])}</div> -->
