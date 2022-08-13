<script lang="ts">
	import type { IPost } from '@models';
	import type { IUser } from '@stores/user';

	import NoResults from '@components/video/NoResults.svelte';
	import VideoCard from '@components/video/VideoCard.svelte';

	export let user: IUser;
	export let userVideos: IPost[];
	export let userLikedVideos: IPost[];

	enum ITab {
		Videos = 'Videos',
		Likes = 'Liked'
	}

	let selectedTab = ITab.Videos;
	let videoList = [] as IPost[] | [];

	function handleTab(tabVal: ITab.Likes | ITab.Videos) {
		if (tabVal === selectedTab) {
			return;
		}
		selectedTab = tabVal;
	}

	$: {
		if (selectedTab === ITab.Videos) {
			videoList = userVideos;
		} else if (selectedTab === ITab.Likes) {
			videoList = userLikedVideos;
		}
	}

	$: noResultsTextComp = selectedTab === ITab.Videos ? `No Videos Yet` : `No Liked Videos Yet`;
</script>

<div class="w-full">
	<div class="flex gap-6 mb-4 items-center bg-white w-full md:gap-10">
		<div class="w-16 h-16 md:w-32 md:h-32">
			<img
				class="rounded-full w-full h-full"
				src={user.image}
				alt={`photo of ${user.userName}'s profile`}
			/>
		</div>
		<div class="flex flex-col justify-center">
			<p
				class="flex gap-1 items-center justify-center font-bold lowercase md:text-3xl md:tracking-wider"
			>
				{user.userName.replaceAll(` `, ``)}
				<!-- <span></span> -->
			</p>
			<p class="capitalize text-gray-400 text-xs md:text-xl">
				{user.userName}
			</p>
		</div>
	</div>

	<div>
		<div class="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
			<button
				class="text-xl font-semibold cursor-pointer mt-2 border-b-2 border-transparent"
				class:!border-dark-400={selectedTab === ITab.Videos}
				class:!text-gray-400={selectedTab !== ITab.Videos}
				aria-label={`View videos of ${user.userName}`}
				on:click={() => handleTab(ITab.Videos)}
			>
				{ITab.Videos}
			</button>
			<button
				class="text-xl font-semibold cursor-pointer mt-2 border-b-2 border-transparent"
				class:!border-dark-400={selectedTab === ITab.Likes}
				class:!text-gray-400={selectedTab !== ITab.Likes}
				aria-label={`View liked videos of ${user.userName}`}
				on:click={() => handleTab(ITab.Likes)}
			>
				{ITab.Likes}
			</button>
		</div>

		<div
			class="flex gap-6 flex-wrap md:justify-start"
			class:!justify-center={videoList.length === 0}
		>
			{#each videoList as post (post._id)}
				<!-- content here -->
				<VideoCard {post} />
			{:else}
				<!-- empty list -->
				<NoResults text={noResultsTextComp} />
			{/each}
		</div>
	</div>
</div>
