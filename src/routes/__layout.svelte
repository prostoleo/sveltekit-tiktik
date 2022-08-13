<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import '../assets/globals.css';

	import Sidebar from '@components/Sidebar.svelte';
	import Navbar from '@components/Navbar.svelte';
</script>

<svelte:head>
	<title>Tiktik | social for short videos</title>
	<link rel="icon" href="favicon.png" />
	<meta
		name="description"
		content="TikTik: здесь рождаются тренды. Миллионы коротких видео на веб-сайте."
	/>
</svelte:head>

<div class="website-wrapper">
	<div class="m-auto overflow-hidden h-screen xl:w-7xl">
		<Navbar />
		<main class="flex gap-6 md:gap-20">
			<div class="h-[90vh] overflow-hidden overflow-y-auto">
				<Sidebar />
			</div>
			<div class="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] flex-1 videos">
				<slot />
			</div>
		</main>
	</div>
</div>
