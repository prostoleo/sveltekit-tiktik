<script lang="ts">
	export let text: string;
</script>

<div class="flex flex-col justify-center items-center h-full w-full">
	<p class="text-6xl">
		<!-- {{text === 'No comments yet' ? <span></span> : <MdOutlineVideocamOff />
			}} -->
		{#if text.toLowerCase().includes('comment')}
			<!-- content here -->
			<div class="i-mdi-comment-off" />
		{:else}
			<!-- else content here -->
			<div class="i-mdi-video-off" />
		{/if}
	</p>
	<p class="text-2xl text-center">{text}</p>
</div>
