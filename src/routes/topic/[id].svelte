<script lang="ts">
	import type { IPost } from '@models';
	// export let number: number;
	export let topicPosts: IPost[];
	// import { allPostsQuery, topicPostsQuery } from '@utils/queries';
	import VideoCard from '@components/video/VideoCard.svelte';
	import NoResults from '@components/video/NoResults.svelte';
</script>

{#if topicPosts.length > 0}
	<!-- content here -->
	{#each topicPosts as post (post._id)}
		<VideoCard {post} />
	{/each}
{:else}
	<!-- else content here -->
	<NoResults text={`no results found`} />
{/if}
