<script lang="ts">
	import type { IComment, IPostedBy } from '@models';
	import type { IUser } from '@stores/user';
	import { allUsers, fetchAllUsers, user } from '@stores/user';

	export let isPostingComment: boolean;
	export let comments: IComment[];

	import { createEventDispatcher } from 'svelte';

	import VideoNoResults from '@components/video/NoResults.svelte';

	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	const dispatch = createEventDispatcher();
	// const emit = defineEmits(['add-comment']);

	interface ICommentLocal {
		comment: string;
		// length?: number;
		_key: string;
		postedBy: IPostedBy;
	}

	onMount(async () => {
		await fetchAllUsers();
	});

	// const comments = ref([]);
	// const userStore = useUserStore();

	let newComment = '';
	// const isCommenting = ref(false);

	function addComment() {
		dispatch('add-comment', newComment);
		newComment = '';
	}

	let pointerOver = false;
	$: showCommentsComputed = browser && window.innerWidth <= 1024 && pointerOver;

	// const show = ref(false);
	let wrapperEl: HTMLDivElement | null = null;

	function handleWrapperClick(event: Event) {
		// console.log('event.target: ', event.target);
		if (
			!event?.target?.matches('input') &&
			!event?.target.matches('a') &&
			!event?.target?.matches('button')
		) {
			pointerOver = !pointerOver;
		}
	}
</script>

<!-- class:`transform
	transition-transform
	duration-300
	-translate-y-[70%]`={showCommentsComputed} -->
<div
	bind:this={wrapperEl}
	class="relative transform transition-transform duration-300 pb-28 lg:(pb-0)"
	on:click|capture={handleWrapperClick}
>
	<!-- @pointerleave="pointerOver = false"
		@pointerout="pointerOver = false"
		@pointerenter.prevent="pointerOver = true"
		@pointerover.prevent="pointerOver = true"
		@pointerdown.prevent="pointerOver = true" -->

	<!-- active:(transform transition-transform duration-300 -translate-y-70/100) hover:(transform transition-transform duration-300 -translate-y-70/100) -->
	<!-- :class="{
			'transform transition-transform duration-300 -translate-y-70/100':
				showCommentsComputed || show,
		}" -->
	<!-- @poinetleave.capture="pointerOver = false" -->
	<!-- @pointerover.capture="pointerOver = true" -->
	<div
		class="border-t-2 border-b-2 border-gray-200 bg-light-300 px-2 md:px-10 pb-28 lg:pb-0 overflow-y-scroll"
	>
		<div class="h-72 max-h-[75vh] lg:h-lg lg:max-h-full">
			{#if comments?.length}
				<!-- content here -->
				{#each comments as item (item.key)}
					<!-- content here -->
					{#each $allUsers as user (user._id)}
						<!-- content here -->
						{#if user._id === item.postedBy._id || item.postedBy._ref}
							<!-- content here -->
							<div class="p-2 items-center">
								<a href={`/profile/${user._id}`}>
									<!-- rounded hover:(bg-primary) -->
									<div class="inline-flex gap-3 items-center p-2 font-semibold cursor-pointer">
										<div class="w-8 h-8">
											<img
												class="rounded-full"
												src={user.image}
												alt={`photo of ${user.userName}'s profile`}
											/>
										</div>
										<div class="">
											<p class="flex gap-1 items-center font-bold lowercase">
												{user.userName.replaceAll(' ', '')}
												<span />
											</p>
											<p class="capitalize text-gray-400 text-xs">
												{user.userName}
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
				<!-- <div v-for="(item, idx) in comments" :key="item.key">
            <template v-for="user in userStore.getAllUsers" :key="user._id">
              
            </template>
          </div> -->
			{:else}
				<!-- else content here -->
				<VideoNoResults text="No comments yet. Be the first one" />
			{/if}
		</div>
	</div>
	{#if $user}
		<div class="absolute bottom-0 left-0 pb-2 px-2 md:px-10 lg:absolute">
			<form class="flex flex-wrap gap-2 md:gap-4" on:submit|preventDefault={addComment}>
				<input
					class="bg-primary px-6 py-4 font-medium border-2 border-gray-100 w-64 max-w-60/100 md:w-3xl lg:w-72 focus:border-accent/50 focus:outline-none flex-1 rounded-lg"
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
		<!-- content here -->
	{/if}
</div>
