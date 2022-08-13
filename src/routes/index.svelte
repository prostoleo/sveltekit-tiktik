<script lang="ts">
	import type { IPost } from '@models';
	export let posts: IPost[];
	import VideoCard from '@components/video/VideoCard.svelte';
	import NoResults from '@components/video/NoResults.svelte';
	import { page } from '$app/stores';
	let dataToShow = posts;
</script>

{#if dataToShow.length > 0}
	{#each dataToShow as post (post._id)}
		<VideoCard {post} />
	{/each}
{:else}
	<NoResults text={`no results found`} />
{/if}
