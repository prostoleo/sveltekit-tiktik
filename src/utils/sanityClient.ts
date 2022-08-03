import sanityClient from '@sanity/client';
// import { useRuntimeConfig } from '#app';
// console.log('import.meta.env: ', import.meta.env);

// const config = useRuntimeConfig();

export function useSanityClient() {
	return sanityClient({
		projectId: import.meta.env.VITE_SANITY_ID,
		dataset: 'production',
		// apiVersion: '2022-03-10',
		useCdn: true,
		token: import.meta.env.VITE_SANITY_PUBLIC_TOKEN
	});
}

/* export const clientSanity = sanityClient({
	projectId: process.env.SANITY_ID,
	dataset: 'production',
	// apiVersion: '2022-03-10',
	useCdn: true,
	token: process.env.SANITY_PUBLIC_TOKEN,
}); */
