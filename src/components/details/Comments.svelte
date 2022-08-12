<!-- <script context="module" lang="ts">
	// your script goes here
	import { fetchAllUsers, allUsers as all } from '@stores/user';

	export async function loadAllUsers() {
		console.log(`loadAllUsers`);
		if (all) {
			console.log('all: ', all);
			return;
		}
		await fetchAllUsers();
		console.log('all: ', all);
	}

	loadAllUsers();
</script> -->
<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { browser } from '$app/env';

	import type { IComment, IPostedBy } from '@models';

	// fetchAllUsers
	import { allUsers, fetchAllUsers, user } from '@stores/user';
	import VideoNoResults from '@components/video/NoResults.svelte';
	import Loader from '@components/Loader.svelte';

	export let isPostingComment: boolean;
	export let comments: IComment[];

	const dispatch = createEventDispatcher();

	let allUsersLoaded = false;

	onMount(async () => {
		await fetchAllUsers();
		allUsersLoaded = true;
	});

	let newComment = '';

	function addComment() {
		dispatch('add-comment', { newComment });
		newComment = '';
	}

	let pointerOver = false;
	$: showCommentsComputed = browser && window.innerWidth <= 1024 && pointerOver;

	let wrapperEl: HTMLDivElement | null = null;

	function handleWrapperClick(event: Event) {
		console.log('event.target: ', event.target);
		if (
			!event?.target?.matches('input') &&
			!event?.target.matches('a') &&
			!event?.target?.matches('button')
		) {
			pointerOver = !pointerOver;
		}
	}

	const classesToToggle = `transform transition-transform duration-300 -translate-y-70/100`;
</script>

<div
	bind:this={wrapperEl}
	class="relative transform transition-transform duration-300 pb-28 lg:pb-0 {showCommentsComputed &&
		classesToToggle}"
	on:click|capture={handleWrapperClick}
>
	<div
		class="border-t-2 border-b-2 border-gray-200 bg-light-300 px-2 md:px-10 pb-28 lg:pb-0 overflow-y-scroll"
	>
		<div class="h-72 max-h-[75vh] lg:h-lg lg:max-h-full">
			{#if !allUsersLoaded}
				<!-- content here -->
				<div class="w-full h-full flex justify-center p-5">
					<Loader />
				</div>
			{:else if allUsersLoaded && comments && comments?.length}
				<!-- {#if comments && comments?.length} -->
				{#each comments as item (item)}
					{#each $allUsers as singleUser (singleUser._id)}
						{#if singleUser._id === item.postedBy._id || item.postedBy?._ref}
							<div class="p-2 items-center">
								<a href={`/profile/${singleUser._id}`}>
									<div class="inline-flex gap-3 items-center p-2 font-semibold cursor-pointer">
										<div class="w-8 h-8">
											<img
												class="rounded-full"
												src={singleUser.image}
												alt={`photo of ${singleUser.userName}'s profile`}
											/>
										</div>
										<div class="">
											<p class="flex gap-1 items-center font-bold lowercase">
												{singleUser.userName.replaceAll(' ', '')}
												<span />
											</p>
											<p class="capitalize text-gray-400 text-xs">
												{singleUser.userName}
											</p>
										</div>
									</div>
								</a>
								<div>
									<p>{item.comment}</p>
								</div>
							</div>
						{/if}
					{/each}
				{/each}
			{:else}
				<VideoNoResults text="No comments yet. Be the first one" />
			{/if}
		</div>
	</div>
	{#if $user}
		<div class="absolute bottom-0 left-0 pb-2 px-2 md:px-10 lg:absolute">
			<form class="flex flex-wrap gap-2 md:gap-4" on:submit|preventDefault={addComment}>
				<input
					class="bg-primaryBg px-6 py-4 font-medium border-2 border-gray-100 w-64 max-w-60/100 md:w-3xl lg:w-72 focus:border-accent/50 focus:outline-none flex-1 rounded-lg"
					type="text"
					bind:value={newComment}
					placeholder="add comment"
				/>
				<button
					class="border-2 border-accent px-2 rounded-lg transition-colors hover:bg-accent hover:text-white"
					aria-label="submit comment"
					on:click={addComment}
				>
					{isPostingComment ? 'Commenting..' : 'Comment'}
				</button>
			</form>
		</div>
	{/if}
</div>
