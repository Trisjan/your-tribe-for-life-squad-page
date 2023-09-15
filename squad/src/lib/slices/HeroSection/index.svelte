<script>
	// @ts-nocheck

	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section class="hero">
	<section class="hero-title">
		<PrismicRichText field={slice.primary.hero_title} />
	</section>
	<section class="hero-intro">
		<PrismicRichText
			field={slice.primary.content}
			components={{
				label: Label
			}}
		/>
	</section>
	<section class="hero-image">
		<PrismicImage field={slice.primary.hero_img} />
	</section>
	<section class="hero-button">
		<PrismicRichText field={slice.primary.hero_button} />
	</section>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Syncopate:wght@700&display=swap');
	.hero {
		background-color: #221f29;
		color: #ffffff;
	}

	.hero-title {
		/* font settings: */
		font-family: Syncopate;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.015rem;
		/* margin + padding settings: */
		margin: 1rem 0rem 2rem 1rem;
	}

	.hero-intro {
		/* font settings: */
		font-family: Syncopate;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 700;
		line-height: 161.102%; /* 1.20825rem */
		letter-spacing: 0.04125rem;
		/* margin + padding settings: */
		margin-bottom: 1rem;
		margin-left: 1rem;
	}

	.hero-image {
		display: none;
	}

	.hero-button {
		/* font settings: */
		color: #3f3e8a;
		font-family: Poppins;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.00875rem;
		text-align: center;
		/* margin + padding settings: */
		margin-left: 1rem;
		padding: 0.5rem;
		background-color: #ffffff;
		border-radius: 0.375rem;
		width: 12rem;
	}

	@media (min-width: 31em) {
	}

	@media (min-width: 45em) {
	}

	@media (min-width: 68em) {
	}
</style>
