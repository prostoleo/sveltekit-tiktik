<script lang="ts">
	import type { SanityAssetDocument } from '@sanity/client';
	import { useSanityClient } from '@utils/sanityClient';
	import { user } from '@stores/user';
	import { topics } from '@utils/constants';
	import Loader from '@components/Loader.svelte';
	import { goto } from '$app/navigation';

	// const client = useSanityClient(config);
	const sanity = useSanityClient();
	// console.log('sanity: ', sanity.client.assets.upload);

	let isLoading = false;
	let videoAsset = <SanityAssetDocument | null>null;
	let wrongFileType = false;
	let inputFileEl = <HTMLInputElement>null;

	let caption = '';
	let selectedCategory = topics[0].name;
	let savingPost = false;

	// $: console.log('selectedCategory: ', selectedCategory);

	async function uploadVideo() {
		try {
			const selectedFile = inputFileEl?.files[0];
			console.log('selectedFile: ', selectedFile);
			const fileTypes = ['video/mp4', 'video/webm', 'video/ogg'];

			if (fileTypes.includes(selectedFile.type)) {
				console.log(`include`);
				// client.assets
				isLoading = true;
				/* sanity.assets
					.upload('file', selectedFile, {
						contentType: selectedFile.type,
						filename: selectedFile.name
					})
					.then((data) => {
						console.log('data: ', data);
						videoAsset = data;
						isLoading = false;
					}); */

				const data = await sanity?.assets.upload('file', selectedFile);
				console.log('data: ', data);
				/* const data = await fetch(`/api/upload`, {
					method: 'POST',
					body: JSON.stringify({
						selectedFile: selectedFile
					})
				}); */
				// .then((res) => res.json());
				console.log('data: ', data);

				videoAsset = data;
				isLoading = false;
			} else {
				// console.log(`error`);
				isLoading = false;
				wrongFileType = true;
			}
		} catch (error) {
			isLoading = false;
			console.log(error);
		}
	}

	async function handlePost() {
		try {
			if (!caption || !videoAsset?._id || !selectedCategory) {
				return;
			}

			savingPost = true;

			// const userData = toRaw(userStore.getUser);
			// console.log('userData: ', userData);

			const post = {
				_type: 'post',
				caption: caption,
				video: {
					_type: 'file',
					asset: {
						_type: 'reference',
						_ref: videoAsset?._id
					}
				},
				userId: $user?._id,
				postedBy: {
					_type: 'postedBy',
					_ref: $user?._id
				},
				topic: selectedCategory
			};
			console.log('post: ', post);

			const res = await fetch(`/api/post`, {
				method: 'POST',
				body: JSON.stringify({
					post: post
				})
			});
			console.log('res: ', res);

			// sanity.create
			// console.log('data: ', data);

			if (!res.ok) {
				throw new Error(res?.error?.message || 'oops, somethins went wrong');
			}

			// router.push('/');
			goto('/');
		} catch (error) {
			console.log(error);
			savingPost = false;
		}
	}
</script>

<div
	class="flex justify-center w-full h-full absolute left-0 top-20 mb-10 pt-10 lg:pt-20 bg-warm-gray-100"
>
	<div
		class="bg-white rounded-lg flex gap-6 flex-wrap justify-center items-center p-14 pt-6 w-7/10 justify-around xl:h-[80vh]"
	>
		<div>
			<div>
				<p class="text-2xl font-bold">Upload video</p>
				<p class="text-md text-gray-400 mt-1">Post video to your account</p>
			</div>
			<div
				class="border-4 border-dashed border-gray-200 rounded-xl flex flex-col justify-center items-center mt-10 outline-none w-[260px] h-[460px] p-6 cursor-pointer hover:border-red-300 bg-gray-100"
			>
				{#if isLoading}
					<!-- content here -->
					<div class="w-full h-full flex justify-center p-2">
						<Loader />
					</div>
				{:else}
					<!-- else content here -->
					<div v-else>
						{#if videoAsset}
							<!-- content here -->
							<div>
								<video
									src={videoAsset.url}
									loop
									controls
									class="rounded-xl h-[450px] mt-16 bg-black"
								/>
							</div>
						{:else}
							<!-- else content here -->
							<div>
								<label class="cursor-pointer" for="uploadVideo">
									<div class="flex flex-col items-center justify-center h-full">
										<div class="flex flex-col items-center justify-center">
											<p class="font-bold text-xl">
												<span class="mdi mdi-cloud-upload text-gray-300 text-6xl" />
											</p>
											<p class="text-xl font-semibold">Upload video</p>
										</div>
										<p class="text-gray-400 text-center text-sm mt-10 leading-8">
											MP4 or WebM or ogg <br />
											720x1280 or higher <br />
											Up to 10 minutes <br />
											Less than 2GB
										</p>
										<p
											class="bg-accent text-white mt-10 rounded text-center text-md font-medium p-2 w-52 outline-none"
										>
											Select file
										</p>
										<input
											id="uploadVideo"
											bind:this={inputFileEl}
											type="file"
											name="upload-video"
											class="w-0 h-0"
											on:change={uploadVideo}
										/>
									</div>
								</label>
							</div>
						{/if}

						{#if wrongFileType}
							<!-- content here -->
							<p class="text-center text-red-400 font-semibold mt-4 text-xl w-[250px]">
								Please select a video file
							</p>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		<div class="flex flex-col gap-3 pb-10">
			<label for="captionInput" class="font-medium">Caption</label>
			<input
				id="captionInput"
				type="text"
				v-model="caption"
				class="rounded outline-none border-2 border-gray-200 p-2"
			/>
			<label for="selectInput" class="font-medium">Choose a Category</label>
			<select
				id="selectInput"
				bind:value={selectedCategory}
				class="rounded outline-none border-2 border-gray-200 p-2 capitalize cursor-pointer lg:p-4"
			>
				<!-- on:change={(e) => e.target} -->
				{#each topics as topic (topic.name)}
					<!-- content here -->
					<option
						class="capitalize bg-white outline-transparent text-gray-700 hover:bg-slate-300"
						value={topic.name}
					>
						{topic.name}
					</option>
				{/each}
			</select>
			<div class="flex gap-6 mt-10">
				<button class="border-gray-300 border-2 font-medium p-2 rounded w-28 lg:w-44" type="button">
					Discard
				</button>
				<button
					class="bg-accent text-white border-transparent border-2 font-medium p-2 rounded w-28 lg:w-44"
					type="button"
					on:click={handlePost}
				>
					Post
				</button>
				<!-- <button></button> -->
			</div>
		</div>
	</div>
</div>
