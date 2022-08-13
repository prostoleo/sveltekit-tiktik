<script lang="ts">
	import type { IGoogleResponse } from '@stores/user';
	import Cookies from 'js-cookie';
	import jwt_decode from 'jwt-decode';
	import {
		createOrGetUser,
		user,
		setIsLoginFalse,
		setUserFromCookieUser,
		clearUser
	} from '@stores/user';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	$: userCookie = Cookies.get(import.meta.env.VITE_USER_KEY);

	let loaded = false;

	$: handleChangeCookie(userCookie);

	function handleChangeCookie(userInfo) {
		if (userInfo) {
			setUserFromCookieUser(JSON.parse(userInfo));
		} else {
			clearUser();
		}
	}

	function setCookie(userInfo) {
		Cookies.set(import.meta.env.VITE_USER_KEY, JSON.stringify(userInfo));
	}

	function clearCookie() {
		Cookies.remove(import.meta.env.VITE_USER_KEY);
	}

	function setGoogleLoadedTrue() {
		loaded = true;
	}

	async function handleLogin(googleResponse: IGoogleResponse) {
		try {
			const user = createOrGetUser(googleResponse);

			const response = await fetch(`/api/auth`, {
				method: 'POST',
				body: JSON.stringify(user)
			}).then((res) => res.json());

			if (!response.ok) {
				throw new Error(`ошибка`);
			}

			setCookie(user);
		} catch (error) {
			setIsLoginFalse();
		}
	}

	function handleLogout() {
		clearUser();
		clearCookie();
		// }
		if ($page.url.pathname.includes('upload')) {
			goto('/');
		}
	}

	$: if (loaded) {
		function renderGoogleBtn() {
			//* https://developers.google.com/identity/gsi/web/guides/display-button - google Identity
			google?.accounts.id.renderButton(
				document.getElementById('buttonDiv'),
				{ theme: 'outline', size: 'large' } // customization attributes
			);
		}

		function handleGoogleLogin() {
			google?.accounts.id.initialize({
				client_id: import.meta.env.VITE_GOOGLE_API_CLIENT_ID,
				// callback: handleCredentialResponse
				callback: handleLogin
			});

			renderGoogleBtn();

			// google?.accounts.id.prompt(); // also display the One Tap dialog
		}

		handleGoogleLogin();

		if (!$user) {
			setTimeout(renderGoogleBtn, 0);
		}
	}

	function handleCredentialResponse(response) {
		const decoded = jwt_decode(response.credential);
	}

	let searchQuery = '';

	function handleSearch() {
		if (searchQuery.length > 0) {
			goto(`/search/${searchQuery}`);
			searchQuery = '';
		}
	}
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" defer onload={setGoogleLoadedTrue()}>
	</script>
</svelte:head>

<header
	class="w-full flex justify-between items-center border-b-2 border-b-gray-200 py-2 px-4 overflow-hidden"
>
	<a href="/">
		<div class="w-24 md:w-28">
			<img class="cursor-pointer" src="/logo.png" alt="TikTik logo" />
		</div>
	</a>
	<div class="relative">
		<form
			class="absolute md:static top-10 -left-20 bg-white inline-flex items-center"
			on:submit|preventDefault={handleSearch}
		>
			<input
				type="text"
				bind:value={searchQuery}
				class="bg-primary-bg p-3 font-medium border-2 border-gray-100 rounded-lg focus:border-accent/50 focus:outline-none md:top-0"
				placeholder="Search accounts and videos"
			/>
			<button
				aria-label="Search accounts and videos"
				class="right-6 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
			>
				<div class="i-mdi-magnify" />
			</button>
		</form>
	</div>

	<div>
		{#if $user}
			<div>
				<div class="flex gap-5 items-center md:gap-10">
					<a href="/upload">
						<button class="border-2 px-2 text-md font-semibold flex items-center gap-2 md:px-4">
							<div class="i-mdi-plus text-xl" />
							<span class="hidden md:block">Upload</span>
						</button>
					</a>

					{#if $user.image}
						<a class="block w-full h-full" href="/">
							<img
								class="block object-cover rounded-full aspect-square w-10 h-10 cursor-pointer"
								src={$user.image}
								alt={`photo of ${$user.userName}'s profile`}
							/>
						</a>
					{/if}
					<button class="px-2" type="button" on:click={handleLogout}>
						<div class="i-mdi-logout text-red-400 text-2xl" />
					</button>
				</div>
			</div>
		{:else}
			<div>
				<button id="buttonDiv" />
			</div>
		{/if}
	</div>
</header>
