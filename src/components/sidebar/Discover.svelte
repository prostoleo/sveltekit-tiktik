<script lang="ts">
	// export let topic;
	import { topics } from '@utils/constants';
	import IconCodeBracesBox from '~icons/mdi/code-braces-box';
	import IconEmoticonCool from '~icons/mdi/emoticon-cool';
	import IconGamepadVariant from '~icons/mdi/gamepad-variant';
	import IconFood from '~icons/mdi/food';
	import IconDancePole from '~icons/mdi/dance-pole';
	import IconLipstick from '~icons/mdi/lipstick';
	import IconPaw from '~icons/mdi/paw';
	import IconMedal from '~icons/mdi/medal';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	// console.log(`$page?.url?.searchParams?.get('topic'): `, $page?.url?.searchParams?.get('topic'));
	// $: topic = $page?.url?.searchParams?.get('topic') || '';
	$: topic = $page?.params.id || null;
	// console.log('topic: ', topic);

	/* const getIcon = (icon: string) => {
		return `i-${icon}`;
	}; */

	$: clientSide = browser;
	// $: console.log('clientSide: ', clientSide);

	function getIcon(icon) {
		return `${icon}`;
	}

	// function getIconComponent(icon) {}

	let iconEl;

	onMount(() => {
		// console.log('iconEl: ', iconEl);
		const iconElReal = iconEl;

		const icons = Array.from(iconElReal.querySelectorAll('[data-icon]')) as HTMLDivElement[];
		// console.log('icons: ', icons);

		icons.forEach((icon: HTMLDivElement, i: number) => {
			// const className = getIcon(topics[i].icon);
			const className = topics[i].icon;
			// console.log('className: ', className);
			icon.classList.add(className);
		});
	});
</script>

<div class="pb-6 xl:border-b-2 xl:border-gray-200">
	<p class="font-semibold text-gray-500 m-3 mt-4 hidden xl:block">Popular topics</p>
	<!-- <IconCodeBracesBox class="text-orange-400 text-3xl" /> -->
	<div class="hidden">
		<div class="i-mdi-code-braces-box" />
		<div class="i-mdi-emoticon-cool" />
		<div class="i-mdi-gamepad-variant" />
		<div class="i-mdi-food" />
		<div class="i-mdi-dance-pole" />
		<div class="i-mdi-lipstick" />
		<div class="i-mdi-paw" />
		<div class="i-mdi-medal" />
	</div>

	<div class="flex gap-3 flex-wrap" bind:this={iconEl}>
		{#each topics as item (item.name)}
			<!-- content here -->
			<!-- <a href={`/?topic=${item.name}`}> -->
			<a href={`/topic/${item.name}`}>
				<div
					class="p-3 rounded flex items-center justify-center gap-2 cursor-pointer text-black xl:border-2 xl:border-gray-300 xl:rounded-full hover:bg-primary-bg"
					class:!border-accent={topic === item.name}
					class:!text-accent={topic === item.name}
				>
					<!-- <div class="font-bold text-2xl xl:text-md">
						<div icon />
					</div> -->
					<!-- <div icon class="font-bold text-2xl xl:text-md" /> -->
					<div data-icon class={`font-bold text-2xl xl:text-md ${item.icon}`} />
					<!-- {#if browser} -->
					<!-- <svelte:component this={item.iconComponent} class="font-bold text-2xl xl:text-md" /> -->
					<!-- {/if} -->
					<span class="font-medium text-md capitalize hidden xl:block">
						{item.name}
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>
