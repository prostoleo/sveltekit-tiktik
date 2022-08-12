<script lang="ts">
	import type Cookie from 'js-cookie';
	import type { IGoogleResponse } from '../stores/user';
	import Cookies from 'js-cookie';
	import jwt_decode from 'jwt-decode';
	// import decodeJwt from '@utils/decodeJwt';
	import { browser } from '$app/env';
	import {
		createOrGetUser,
		user,
		setIsLoginFalse,
		setUserFromCookieUser,
		clearUser
	} from '../stores/user';

	// let user = false;
	$: userCookie = Cookies.get(import.meta.env.VITE_USER_KEY);
	let userLS = null;

	// $: userLS = (browser && JSON.parse(localStorage.getItem(import.meta.env.VITE_USER_KEY))) || null;
	// $: getUserCookie = userCookie;
	let loaded = false;
	let client = null;

	$: handleChangeCookie(userCookie);
	// $: userCookie;
	// $: console.log('userCookie: ', userCookie);
	/* $: handleChangeCookie(userLS);
	$: console.log('userLS: ', userLS);

	$: console.log('user', $user);

	$: if (browser) {
		userLS = JSON.parse(localStorage.getItem(import.meta.env.VITE_USER_KEY)) || null;
		console.log('userLS: ', userLS);

		if (userLS) {
			setUserFromCookieUser(userLS);
		} else {
			clearUser();
		}
	} */

	function handleChangeCookie(userInfo) {
		// console.log('userInfo - handleChangeCookie: ', userInfo);
		if (userInfo) {
			// console.log(`newVal truthy - setUser`);
			setUserFromCookieUser(JSON.parse(userInfo));
		} else {
			// console.log(`newVal falsy - clearUser`);
			clearUser();
		}
	}

	function setCookie(userInfo) {
		// console.log(`setCookie`);
		Cookies.set(import.meta.env.VITE_USER_KEY, JSON.stringify(userInfo));

		/* if (browser) {
			localStorage.setItem(import.meta.env.VITE_USER_KEY, JSON.stringify(userInfo));
		} */
	}

	function clearCookie() {
		// console.log(`clearCookie`);
		Cookies.remove(import.meta.env.VITE_USER_KEY);
		/* if (browser) {
			localStorage.removeItem(import.meta.env.VITE_USER_KEY);
		} */
	}

	function setGoogleLoadedTrue() {
		// console.log('TODO: add onload function');
		loaded = true;
		/* if (google?.accounts) {
			console.log('google: ', google);
		} */

		/* function handleGoogleLogin() {
			google?.accounts.id.initialize({
				client_id: import.meta.env.VITE_GOOGLE_API_CLIENT_ID,
				// callback: handleCredentialResponse
				callback: handleLogin
			});
			google?.accounts.id.renderButton(
				document.getElementById('buttonDiv'),
				{ theme: 'outline', size: 'large' } // customization attributes
			);
			// google?.accounts.id.prompt(); // also display the One Tap dialog
		}

		handleGoogleLogin(); */
	}

	async function handleLogin(googleResponse: IGoogleResponse) {
		// console.log('googleResponse: ', googleResponse);

		try {
			const user = createOrGetUser(googleResponse);
			// console.log('user - handleLogin: ', user);
			// console.log('rawUser: ', rawUser);

			const response = await fetch(`/api/auth`, {
				method: 'POST',
				body: JSON.stringify(user)
			}).then((res) => res.json());
			// console.log('response: ', response);
			// console.log('data: ', data);

			if (!response.ok) {
				throw new Error(`ошибка`);
			}

			// userStore.setIsLoginTrue();
			// setUserCookie(rawUser);
			// userCookie.value = rawUser;
			// console.log(`before set Cookie`);
			setCookie(user);
		} catch (error) {
			setIsLoginFalse();
			// userStore.$state.isLogin = false;
		}
	}

	function handleLogout() {
		// if (process.client) {
		// await googleLogout();

		clearUser();
		clearCookie();
		// }
	}

	$: if (loaded) {
		// console.log('loaded: ', loaded);
		// console.log('google: ', google);
		/* // console.log();
		 {
		} */
		/* client = google?.accounts.oauth2.initCodeClient({
			client_id: import.meta.env.VITE_GOOGLE_API_CLIENT_ID,
			scope: 'https://www.googleapis.com/auth/calendar.readonly',
			ux_mode: 'popup',
			callback: (response) => {
				const xhr = new XMLHttpRequest();
				xhr.open('POST', code_receiver_uri, true);
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				// Set custom header for CRSF
				xhr.setRequestHeader('X-Requested-With', 'XmlHttpRequest');
				xhr.onload = function () {
					console.log('Auth code response: ' + xhr.responseText);
				};
				xhr.send('code=' + code);
			}
		}); */
		/* client = google?.accounts.oauth2.initTokenClient({
			client_id: import.meta.env.VITE_GOOGLE_API_CLIENT_ID,
			enable_serial_consent: true,
			response_type: 'token',
			prompt: 'select_account',
			include_granted_scopes: true,
			gsiwebsdk: 3,
			autoLogin: true,
			access_type: 'online',
			scope: 'https://www.googleapis.com/auth/calendar.readonly',
			callback: async (response) => {
				console.log('response: ', response);
				// ...
				if (response && response.access_token) {
					// const decoded = jwt_decode(response.access_token);
					// console.log('decoded: ', decoded);
					const token: string = response.access_token;
					// console.log('token: ', token);
					// console.log('typeof token: ', typeof token);
					//works
					// const { header, payload, signature } = decodeJwt(token);
					// console.log({ header, payload, signature });

					//works
					// 		const decoded = await fetch(`/api/token`, {
					// 			method: 'POST',
					// 			body: JSON.stringify({
					// 				token: token
					// 			})
					// 		}).then(async (data) => await data.json());
					// 		console.log('decoded: ', decoded);
				}
			}
		});
		// console.log(decodeCredentials);
		// console.log(google.decodeCredentials);
		console.log('client: ', client); */
		// console.log('google: ', google);

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
			// console.log('logout user');
			setTimeout(renderGoogleBtn, 0);
		}
	}

	/* $: if (!$user) {
		google?.accounts.id.renderButton(
			document.getElementById('buttonDiv'),
			{ theme: 'outline', size: 'large' } // customization attributes
		);
	} */

	/* function authSuccess(user) {
		console.log('success auth!! ');
		console.log('user: ', user);
	} */

	function handleCredentialResponse(response) {
		console.log('response: ', response);
		console.log('Encoded JWT ID token: ' + response.credential);

		const decoded = jwt_decode(response.credential);
		console.log('decoded: ', decoded);
	}
	/* if (browser) {
		window.onload = function () {
			google?.accounts.id.initialize({
				client_id: import.meta.env.VITE_GOOGLE_API_CLIENT_ID,
				callback: handleCredentialResponse
			});
			google?.accounts.id.renderButton(
				document.getElementById('buttonDiv'),
				{ theme: 'outline', size: 'large' } // customization attributes
			);
			google?.accounts.id.prompt(); // also display the One Tap dialog
		};
	} */
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
			<!-- <img class="cursor-pointer max-w-full" src="/tiktik-logo.png" /> -->
			<img class="cursor-pointer" src="/logo.png" alt="TikTik logo" />
		</div>
	</a>
	<!-- <i class="bi bi-archive"></i> -->
	<div class="relative">
		<!-- on:submit={handleSearch} -->
		<form class="absolute md:static top-10 -left-20 bg-white inline-flex items-center">
			<!-- bind:value={searchQuery} -->
			<input
				type="text"
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
			<!-- v-if="userComputed" -->
			<div>
				<div class="flex gap-5 items-center md:gap-10">
					<a href="/upload">
						<button class="border-2 px-2 text-md font-semibold flex items-center gap-2 md:px-4">
							<div class="i-mdi-plus text-xl" />
							<span class="hidden md:block">Upload</span>
						</button>
					</a>
					<!-- {{ userStore.getUser.userName }} -->
					<!--console.log(); v-if="userStore.getUser.image" -->
					{#if $user.image}
						<!-- content here -->
						<a class="block w-full h-full" href="/">
							<img
								class="block object-cover rounded-full aspect-square w-10 h-10 cursor-pointer"
								src={$user.image}
								alt={`photo of ${$user.userName}'s profile`}
							/>
							<!-- width="62" -->
							<!-- height="62" -->
						</a>
					{/if}
					<!-- on:click={handleLogout} -->
					<button class="px-2" type="button" on:click={handleLogout}>
						<div class="i-mdi-logout text-red-400 text-2xl" />
					</button>

					<!-- <img  :src="userStore.getUser.image" /> -->
				</div>
			</div>
			<!-- content here -->
		{:else}
			<div>
				<button id="buttonDiv" />
			</div>
		{/if}
	</div>
</header>
