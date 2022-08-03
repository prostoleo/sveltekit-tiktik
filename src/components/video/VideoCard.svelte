<script lang="ts">
	import type { IPost } from '@models';
	import { onMount } from 'svelte';

	import IconPause from '~icons/mdi/pause';
	import IconPlay from '~icons/mdi/play';
	import IconVolumeOff from '~icons/mdi/volume-off';
	import IconVolumeHigh from '~icons/mdi/volume-high';

	export let post: IPost;

	let videoRef: HTMLVideoElement;
	// let videoRef;

	let isHover = false;
	let playing = false;
	let isVideoMuted = false;

	function setHoverTrue(): void {
		isHover = true;
	}
	function setHoverFalse(): void {
		isHover = false;
	}
	function setIsVideoMutedTrue(): void {
		isVideoMuted = true;
	}
	function setIsVideoMutedFalse(): void {
		isVideoMuted = false;
	}

	function onVideoPress(): void {
		if (playing) {
			videoRef?.pause();
			playing = false;
		} else {
			videoRef?.play();
			playing = true;
		}
	}
	function watchIsVideMuted(val) {
		if (videoRef) {
			videoRef.muted = val;
		}
	}

	$: watchIsVideMuted(isVideoMuted);
</script>

<div class="flex flex-col border-b-2 border-gray-200 pb-6">
	<div>
		<div class="flex gap-3 p-2 cursor-pointer font-semibold rounded">
			<div class="w-10 h-10 md:w-16 md:h-16">
				<a class="block w-full h-full" href={`/profile/${post?.postedBy?._id}`}>
					<img
						src={post?.postedBy?.image}
						class="block w-full h-full object-cover rounded-full aspect-square"
						alt={`photo of ${post?.postedBy?.userName}'s profile`}
					/>
					<!-- width="62" -->
					<!-- height="62" -->
				</a>
			</div>
			<div>
				<a href={`/profile/${post?.postedBy?._id}`}>
					<div class="flex items-center gap-2">
						<p class="flex gap-2 items-center font-bold text-primary md:text-md">
							{post?.postedBy?.userName}
							<!-- goberfified icon -->
						</p>
						<p class="capitalize font-medium text-xs text-gray-500 hidden md:block">
							{post?.postedBy?.userName}
						</p>
					</div>
				</a>
			</div>
		</div>
	</div>

	<div class="lg:ml-20 flex gap-4 relative">
		<div
			class="rounded-3xl relative"
			on:mouseover={setHoverTrue}
			on:focus={setHoverTrue}
			on:mouseleave={setHoverFalse}
			on:blur={setHoverFalse}
		>
			<a href={`/details/${post?._id}`}>
				<video
					bind:this={videoRef}
					class="h-[300px] w-[200px] rounded-2xl cursor-pointer bg-gray-100 md:h-[400px] lg:w-[600px] lg:h-[530px]"
					loop
					src={post?.video?.asset?.url}
				/>
			</a>
			{#if isHover}
				<!-- content here -->
				<div
					class="absolute bottom-6 cursor-pointer left-50/100 transform -translate-x-1/2 flex gap-10  lg:justify-between"
				>
					{#if playing}
						<!-- content here -->
						<button aria-label="pause video" on:click={onVideoPress}>
							<IconPause class="text-black text-2xl lg:text-4xl" />
						</button>
					{:else}
						<!-- else content here -->
						<button aria-label="play video" on:click={onVideoPress}>
							<IconPlay class=" text-black text-2xl lg:text-4xl" />
						</button>
					{/if}
					{#if isVideoMuted}
						<!-- content here -->
						<button aria-label="turn on volume" on:click={setIsVideoMutedFalse}>
							<IconVolumeOff class="text-black text-2xl lg:text-4xl" />
						</button>
					{:else}
						<!-- else content here -->
						<button aria-label="turn off volume" on:click={setIsVideoMutedTrue}>
							<IconVolumeHigh class="text-black text-2xl lg:text-4xl" />
						</button>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>
