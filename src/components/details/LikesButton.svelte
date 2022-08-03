<script setup lang="ts">
	import type { ILike } from '@models';
	import { createEventDispatcher } from 'svelte';
	// import { useUserStore } from '~~/store/user';
	export let likes: ILike[];
	// console.log('likes: ', likes);
	const dispatch = createEventDispatcher();
	// const emit = defineEmits(['toggle-like']);

	let alreadyLiked = false;
	// const userStore = useUserStore();

	function handleLike() {
		alreadyLiked = !alreadyLiked;
		dispatch('toggle-like', alreadyLiked);
	}

	/* $: filterLikes: <ILike | ILike[]> = (() => {
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
					class="i-mdi-heart-multiple bg-primary rounded-full text-lg text-accent block aspect-square !leading-none p-2 md:text-2xl md:p-4"
					on:click={handleLike}
				/>
			</div>
		{:else}
			<div>
				<div
					class="i-mdi-heart-multiple-outline bg-primary rounded-full text-lg text-accent block aspect-square !leading-none p-2 md:text-2xl md:p-4"
					on:click={handleLike}
				/>
			</div>
		{/if}

		<p class="font-semibold">{likes?.length ?? 0}</p>
	</div>
</div>
