<script>
	// @ts-nocheck

	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import Label from './Label.svelte';
	import Profile from '$lib/components/profile.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<Navbar/>


<section class="hero">
	<section class="hero-introduction">
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
	</section>



	<section class="hero-image">
		<PrismicImage field={slice.primary.hero_image} />
	</section>
</section>

<Profile/>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Syncopate:wght@700&display=swap');
	.hero {
		background-color: #221f29;
		color: #ffffff;
		padding-top: 1rem;
		padding-bottom: 1rem;
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

	@media (min-width: 31em) {
		.hero-image {
			display: none;
		}
	}

	@media (min-width: 45em) {
		.hero {
			display: grid;
			grid:
				'title image' 1fr
				/ 1fr 1fr;
			column-gap: 20px;
		}

		.hero-introduction {
			grid-area: title;
		}

		.hero-image {
			display: block;
			grid-area: image;
			text-align: right;
		}
	}

	@media (min-width: 68em) {
		.hero {
			padding: 2rem;
		}
	}
</style>
