<script setup lang="ts">
	export let likes: ILike[];
	import type { ILike } from '@models';
	import { createEventDispatcher } from 'svelte';
	import { user } from '@stores/user';
	// import { useUserStore } from '~~/store/user';
	// console.log('likes: ', likes);
	const dispatch = createEventDispatcher();
	// const emit = defineEmits(['toggle-like']);

	let alreadyLiked = false;
	// const userStore = useUserStore();

	function handleLike() {
		alreadyLiked = !alreadyLiked;
		dispatch('toggle-like', { alreadyLiked });
	}

	$: filterLikes = likes?.filter((item) => item?._ref === $user._id);

	$: watchLikes(likes);
	$: watchLikes(filterLikes);
	$: likesLength = likes?.length || 0;

	$: console.log('likesLength: ', likesLength);
	/* $: {
		if (filterLikes?.length > 0) {
			alreadyLiked = true;
		} else {
			alreadyLiked = false;
		}
	} */

	function watchLikes(likes) {
		if (filterLikes?.length > 0) {
			alreadyLiked = true;
		} else {
			alreadyLiked = false;
		}
	}
	/* $: filterLikes as <ILike | ILike[]> = (() => {
		const arr: ILike | ILike[] = likes?.filter(
			(item) => item?._ref === userStore?.getUser?._id
		);

		return arr;
	}); */

	/* watch([props.likes, filterLikes], () => {
		if (filterLikes?.value?.length > 0) {
			alreadyLiked.value = true;
		} else {
			alreadyLiked.value = false;
		}
	}); */
</script>

<div class="gap-6">
	<div class="mt-4 inline-flex flex-col justify-center items-center cursor-pointer">
		{#if alreadyLiked}
			<div>
				<div
					class="rounded-full text-lg text-accent block aspect-square !leading-none p-2 md:text-2xl md:p-4 i-mdi-heart-multiple"
					on:click={handleLike}
				/>
			</div>
		{:else}
			<div>
				<div
					class="rounded-full text-lg text-accent block aspect-square !leading-none p-2 md:text-2xl md:p-4 i-mdi-heart-multiple-outline"
					on:click={handleLike}
				/>
			</div>
		{/if}

		<p class="font-semibold">{likesLength}</p>
	</div>
</div>
