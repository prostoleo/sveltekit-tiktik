<script lang="ts">
	import type { IPost, ICommentData, ILikeData } from '@models';
	import LikesButton from '@components/details/LikesButton.svelte';
	export let post: IPost;
	// console.log('post: ', post);
	// import { useUserStore } from '~~/store/user';

	// console.log('videoId: ', videoId);
	// const detailQuery = postDetailQuery(videoId.value);
	// const userStore = useUserStore();

	/* const {
		data: postDetails,
		pending,
		refresh
	}: {
		data: Ref<IPost>;
		pending: Ref<boolean>;
		refresh: () => Promise<void>;
		error: Ref<any>;
	} = await useAsyncData('singlePost', () => sanity.fetch(detailQuery).then((data) => data[0])); */

	let videoRef: HTMLVideoElement | null = null;
	let playing = false;
	let isVideoMuted = false;

	function onVideoClick(): void {
		// if (!process.client) return;

		if (playing) {
			videoRef.pause();
			playing = false;
		} else {
			videoRef.play();
			playing = true;
		}
	}

	/* watch([post, isVideoMuted], () => {
		if (videoRef?.value) {
			videoRef.value.muted = isVideoMuted.value;
		}
	}); */

	/* watch(
		// route.params,
		videoId,
		(newVal, oldVal) => {
			// console.log({ newVal, oldVal });
			// if (newVal?.id && newVal?.id !== oldVal?.id) {
			if (newVal && newVal !== oldVal) {
				refresh();
			}
		},
		{
			immediate: true,
		}
	); */

	async function handleLike(event: CustomEvent<{ alreadyLiked: boolean }>) {
		console.log(`handleLike func`);
		/* try {
			if (userStore.getUser) {
				const rawUser = toRaw(userStore.getUser);
				// console.log('rawUser: ', rawUser);

				const likeData: ILikeData = {
					userId: rawUser._id,
					postId: post.value._id,
					like: unref(like),
				};

				const { data, error } = await useFetch(`/api/like`, {
					method: 'PUT',
					body: {
						likeData: likeData,
					},
				});
				// console.log('data: ', data);

				post.value = { ...post.value, likes: data.value.body.likes };
			}
		} catch (error) {} */
	}

	let isPostingComment = false;

	/* async function addComment(newComment: string) {
		try {
			if (userStore.getUser && newComment) {
				isPostingComment.value = true;
				const rawUser = toRaw(userStore.getUser);

				const commentData: ICommentData = {
					userId: rawUser._id,
					comment: newComment,
				};

				const { data, error } = await useFetch(`/api/post/${post.value._id}`, {
					method: 'PUT',
					body: {
						// likeData: likeData,
						commentData,
					},
				});

				if (error.value) {
					throw new Error(error.value);
				}

				post.value = { ...post.value, comments: data?.value?.body.comments };
				isPostingComment.value = false;
			}
		} catch (error) {
			console.log('error: ', error);
		}
	} */
</script>

<div>
	{#if !post}
		<!-- content here -->
		<div>Oopsy</div>
	{:else}
		<!-- else content here -->
		<div
			class="flex w-full h-full absolute left-0 top-0 bottom-0 bg-white flex-wrap lg:flex-nowrap"
		>
			<!-- <pre>{{ postDetails }}</pre> -->
			<div class="relative flex-2 w-full lg:w-75/100 flex justify-center items-center">
				<div class="absolute inset-0 bg-blurred-img-my bg-no-repeat bg-cover filter blur-lg" />
				<a
					class="absolute top-6 left-2 lg:left-6 flex gap-6 z-50 p-1 bg-white opacity-60 rounded-full hover:opacity-100"
					href="/"
				>
					<div class="i-mdi-close text-2xl leading-none" />
				</a>
				<div class="relative">
					<div class="lg:h-screen h-[57vh]">
						<video
							bind:this={videoRef}
							class="h-full cursor-pointer"
							loop
							src={post?.video?.asset?.url}
							on:click={onVideoClick}
						/>
					</div>

					<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						{#if !playing}
							<button class="p-1 bg-white rounded-xl" on:click={onVideoClick}>
								<div class="i-mdi-play text-6xl lg:text-8xl" />
							</button>
						{/if}
					</div>
					<div
						class="absolute bottom-5 right-5 lg:right-10 lg:bottom-10 rounded-full p-1 bg-white opacity-50 filter drop-shadow-sm cursor-pointer hover:opacity-100"
					>
						{#if isVideoMuted}
							<button class="" aria-label="turn on volume" on:click={() => (isVideoMuted = false)}>
								<div class="i-mdi-volume-off text-black text-2xl lg:text-4xl" />
							</button>
						{:else}
							<button class="" aria-label="turn off volume" on:click={() => (isVideoMuted = true)}>
								<div class="i-mdi-volume-high text-black text-2xl lg:text-4xl" />
							</button>
						{/if}
					</div>
				</div>
			</div>

			<div class="relative flex-grow flex-shrink-0 w-full bg-white lg:w-25/100">
				<div class="mt-5 lg:mt-20">
					<div class="flex gap-3 p-2 cursor-pointer font-semibold rounded">
						<div class="w-12 h-12 md:w-16 md:h-16">
							<a class="block w-full h-full" href={`/profile/${post.postedBy._id}`}>
								<img
									src={post.postedBy.image}
									class="block w-full h-full object-cover rounded-full aspect-square"
									alt={`photo of ${post.postedBy.userName}'s profile`}
								/>
							</a>
						</div>
						<div>
							<a href={`/profile/${post.postedBy._id}`}>
								<div class="flex flex-col gap-2 mt-2">
									<p class="flex gap-2 items-center font-bold text-primary md:text-md">
										{post.postedBy.userName}
									</p>
									<p class="capitalize font-medium text-xs text-gray-500 hidden md:(block)">
										{post.postedBy.userName}
									</p>
								</div>
							</a>
						</div>
					</div>

					<p class="px-10 text-gray-600 text-lg">{post.caption}</p>

					<div class="mt-5 px-10">
						<!-- {#if userStore?.getUser?._id} -->
						<!-- content here -->
						<LikesButton likes={post.likes} on:toggle-like={handleLike} />
						<!-- {/if} -->

						<!-- <Comments/> -->
					</div>
					<!-- <DetailsComments
						@add-comment="addComment"
						:is-posting-comment="isPostingComment"
						:comments="post.comments"
					/> -->
					<!-- @pointer -->
					<!-- :comment="comment" -->
				</div>
			</div>
		</div>
	{/if}
</div>
