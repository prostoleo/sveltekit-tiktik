<script lang="ts">
	import type { IPost } from '@models';
	import { allUsers, fetchAllUsers } from '@stores/user';
	import type { IUser } from '@stores/user';

	import VideoCard from '@components/video/VideoCard.svelte';
	import NoResults from '@components/video/NoResults.svelte';
	import Loader from '@components/Loader.svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let videos: IPost[];

	$: searchTerm = $page.params.searchTerm;

	let isLoading = true;

	onMount(async () => {
		await fetchAllUsers();
		isLoading = false;
	});

	$: searchedAccounts = $allUsers?.filter((user: IUser) =>
		user.userName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	enum ITab {
		IsAccounts = 'Accounts',
		IsVideos = 'Videos'
	}

	let selectedTab = ITab.IsAccounts;
	let videoList = [] as IPost[] | [];

	function handleTab(tabVal: ITab.IsAccounts | ITab.IsVideos) {
		if (tabVal === selectedTab) {
			return;
		}
		selectedTab = tabVal;
	}
</script>

<div class="w-full">
	{#if isLoading}
		<div class="w-full h-full flex justify-center p-5">
			<Loader />
		</div>
	{:else}
		<div class="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
			<button
				class="text-xl font-semibold cursor-pointer mt-2 border-b-2 border-transparent "
				class:!border-dark-400={selectedTab === ITab.IsVideos}
				class:text-gray-400={selectedTab !== ITab.IsVideos}
				on:click={() => handleTab(ITab.IsVideos)}
				aria-label={`View videos on ${searchTerm} query`}
			>
				{ITab.IsVideos}
			</button>

			<button
				class="text-xl font-semibold cursor-pointer mt-2 border-b-2 border-transparent "
				class:!border-dark-400={selectedTab === ITab.IsAccounts}
				class:text-gray-400={selectedTab !== ITab.IsAccounts}
				on:click={() => handleTab(ITab.IsAccounts)}
				aria-label={`View accounts on ${searchTerm} query`}
			>
				{ITab.IsAccounts}
			</button>
		</div>

		{#if selectedTab === ITab.IsVideos}
			<div class="flex flex-wrap gap-6 md:mt-16 md:justify-start">
				{#each videos as video (video._id)}
					<VideoCard post={video} />
				{:else}
					<NoResults text={`No video results for ${searchTerm}`} />
				{/each}
			</div>
		{:else if selectedTab === ITab.IsAccounts}
			<div class="md:mt-16">
				{#each searchedAccounts as user (user._id)}
					<a href={`/profile/${user._id}`}>
						<div
							class="flex gap-3 items-center p-2 font-semibold cursor-pointer border-b-2 border-gray-200"
						>
							<div class="w-12 h-12">
								<img
									class="rounded-full"
									src={user.image}
									alt={`photo of ${user.userName}'s profile`}
								/>
							</div>
							<div class="mb-1">
								<p class="flex gap-1 items-center font-bold lowercase text-xl">
									{user.userName.replaceAll(' ', '')}
									<span />
								</p>
								<p class="capitalize text-gray-400 text-sm">
									{user.userName}
								</p>
							</div>
						</div>
					</a>
				{:else}
					<NoResults text={`No accounts results for ${searchTerm}`} />
				{/each}
			</div>
		{/if}
	{/if}
</div>
