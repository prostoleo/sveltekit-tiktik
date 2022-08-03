<script lang="ts">
	import SidebarDiscover from './sidebar/Discover.svelte';
	// const router = useRouter();
	let showSidebar = true;

	const toggleSidebar = () => {
		// console.log(`click`);
		showSidebar = !showSidebar;
	};

	let userProfile = false;
</script>

<aside>
	<div class="block m-2 ml-4 mt-3 xl:hidden" on:click={toggleSidebar}>
		{#if showSidebar}
			<!-- content here -->
			<div class="cursor-pointer text-xl">
				<div class="i-mdi-close-circle" />
			</div>
		{:else}
			<!-- else content here -->

			<div class="cursor-pointer text-xl">
				<div class="i-mdi-menu" />
			</div>
		{/if}
	</div>

	{#if showSidebar}
		<!-- content here -->
		<div class="sidebar-content">
			<div
				class="w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-200 p-3 xl:border-0 xl:w-400"
			>
				<div class="border-gray-200 xl:pb-4 xl:border-b-2">
					<a class="block" href="/">
						<div
							class="flex items-center justify-center p-3 gap-2 font-semibold cursor-pointer text-accent rounded xl:justify-start hover:bg-primary-bg"
						>
							<!-- <p class=""> -->
							<!-- <i class="bi bi-house-fill"></i> -->
							<div class="text-2xl i-mdi-home" />
							<!-- </p> -->
							<span class="text-xl hidden xl:block">For you</span>
						</div>
					</a>
				</div>

				<SidebarDiscover />

				<!-- <SidebarSuggestedAccounts /> -->
				<!-- <SidebarFooter /> -->
			</div>
		</div>
	{/if}
</aside>

<style lang="scss"></style>
