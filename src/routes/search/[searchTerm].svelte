<script lang="ts">
	import type { IPost } from '@models';
	import { user, allUsers } from '@stores/user';
	import type { IUser } from '@stores/user';

	import VideoCard from '@components/video/VideoCard.svelte';
	import NoResults from '@components/video/NoResults.svelte';

	import { page } from '$app/stores';

	export let videos: IPost[];

	interface ISearchData {
		body: {
			videos: IPost[];
		};
	}

	$: searchTerm = $page.url.searchParams('searchTerm');
	console.log('searchTerm: ', searchTerm);

	/* const {
		data,
	}: {
		data: Ref<ISearchData>;
	} = await useFetch(`/api/search/${searchTerm}`, {
		method: 'POST',
	}); */

	// const dataToShow = ref(data)
	// console.log('data: ', data);
	// console.log('videos: ', videos);
	$: searchedAccounts = $allUsers.filter((user: IUser) =>
		user.userName.toLowerCase().includes(searchTerm.toLowerCase())
	);
	// console.log('searchedAccounts: ', searchedAccounts);

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
	<div class="flex gap-10 mb-10 mt-10 border-b-2 border-gra-200 bg-white w-full">
		<!-- :class="{
    'border-dark-400': selectedTab === ITab.IsVideos,
    'text-gray-400': selectedTab !== ITab.IsVideos,
  }" -->
		<button
			class="text-xl font-semibold cursor-pointer mt-2 border-b-2 border-transparent {selectedTab ===
				ITab.IsVideos && 'border-dark-400'} {selectedTab !== ITab.IsVideos && 'text-gray-400'}"
			on:click={handleTab(ITab.IsVideos)}
		>
			<!-- :aria-label="`View videos of ${user.userName}`" -->
			{ITab.IsVideos}
		</button>
		<!-- :class="{
      'border-dark-400': selectedTab === ITab.IsAccounts,
      'text-gray-400': selectedTab !== ITab.IsAccounts,
    }" -->
		<button
			class="text-xl font-semibold cursor-pointer mt-2 border-b-2 border-transparent {selectedTab ===
				ITab.IsAccounts && 'border-dark-400'} {selectedTab !== ITab.IsAccounts && 'text-gray-400'}"
			on:click={handleTab(ITab.IsAccounts)}
		>
			<!-- :aria-label="`View liked videos of ${user.userName}`" -->
			{ITab.IsAccounts}
		</button>
	</div>

	{#if selectedTab === ITab.IsVideos}
		<!-- content here -->
		<div class="flex flex-wrap gap-6 md:mt-16 md:justify-start">
			{#if videos?.length > 0}
				<!-- content here -->
				{#each videos as video (video._id)}
					<!-- content here -->
					<VideoCard post={video} />
				{/each}
			{:else}
				<!-- else content here -->
				<VideoNoResults :text="`No video results for ${$route.params.searchTerm}`" />
			{/if}
		</div>
	{:else if selectedTab === ITab.IsAccounts}
		<!-- else if content here -->
		<div v-else-if="selectedTab === ITab.IsAccounts" class="md:mt-16">
			{#if searchedAccounts?.length > 0}
				{#each searchedAccounts as user (user._id)}
					<a href={`/profile/${user._id}`}>
						<!-- rounded hover:(bg-primary) -->
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
				{/each}
			{/if}
		</div>
	{:else}
		<!-- else content here -->
		<NoResults :text="`No accounts results for ${$route.params.searchTerm}`" />
	{/if}
</div>
