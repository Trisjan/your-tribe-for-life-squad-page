<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import Label from './Label.svelte';
	import Profile from '$lib/components/profile.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<Navbar />

<!-- <Profile/> -->

<section class="container">
	<PrismicRichText field={slice.primary.title} />
	<PrismicRichText field={slice.primary.content} />

	<PrismicImage field={slice.primary.hero_img} />
</section>

<style>
	.container {
		max-width: 600px;
		margin: 6em auto;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}
</style>
