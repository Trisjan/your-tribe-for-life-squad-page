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
	<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label
		}}
	/>

	<PrismicImage field={slice.primary.hero_img} />
</section>

<div class="grid-container">
	<div class="grid">
		<div class="div1" />
		{#if slice && slice.primary}
			<div class="name">{slice.primary.name}</div>
			<div class="github">{slice.primary.github_tag}</div>
		{:else}
			<!-- Handle the case where slice or slice.primary is undefined -->
			<p>Data is unavailable</p>
		{/if}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Syncopate&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.container {
		max-width: 600px;
		margin: 6em auto;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}

	.grid-container {
		display: grid;
		justify-items: center;

		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: 1fr 1fr;
		/* grid-column-gap: 100px; */
		grid-row-gap: 75px;

		padding-top: 100px;
	}

	.grid {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.name {
		color: #221f29;
		font-family: 'Syncopate', sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.24px;
		padding-top: 20px;
	}

	.github {
		font-family: 'Poppins', sans-serif;
	}

	.div1 {
		width: 300px;
		height: 300px;
		flex-shrink: 0;
		border-radius: 20px;
		background: #d9d9d9;
	}
</style>
