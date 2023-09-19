<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import { PrismicLink } from '@prismicio/svelte';

	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let animate = false;

	onMount(() => {
		animate = true;
	});

	import Label from './Label.svelte';
	import Profile from '$lib/components/profile.svelte';
	// import Navbar from '$lib/components/navbar.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<!-- <Navbar /> -->

<section class="hero">
	<section class="text">
		{#if animate}
			<h1 in:fly={{ x: -200, easing: backOut, delay: 500 }}>
				<PrismicRichText field={slice.primary.hero_title} />
			</h1>
		{/if}
		{#if animate}
			<section in:fly={{ x: -200, easing: backOut, delay: 1000 }}>
				<PrismicRichText field={slice.primary.content} />
			</section>
		{/if}
	</section>
	<section class="img-ufo">
		<PrismicImage field={slice.primary.hero_image} />
	</section>
</section>

<section class="button">
	<button id="button1">Squad A</button>
	<button id="button2">Squad B</button>
</section>

<div class="grid-container-a" id="option1">
	{#each slice.items.slice(0, 22) as item}
		<div class="grid">
			<div class="div">
				<PrismicLink field={item.github_link}>
					<PrismicImage field={item.image} />
				</PrismicLink>
			</div>
			<div class="name">{item.name}</div>
			<div class="github">@{item.github_tag}</div>
		</div>
	{/each}
</div>

<div class="grid-container-b" id="option2">
	{#each slice.items.slice(22, 48) as item}
		<div class="grid">
			<div class="div">
				<PrismicLink field={item.github_link}>
					<PrismicImage field={item.image} />
				</PrismicLink>
			</div>
			<div class="name">{item.name}</div>
			<div class="github">@{item.github_tag}</div>
		</div>
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Syncopate&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.hero {
		font-family: 'Syncopate', sans-serif;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.24px;
		padding-top: 60px;
		color: white;
		margin-left: 6.5rem;
		display: flex;
		/* justify-content: space-between; */
	}

	.button {
		margin-left: 6.5rem;
	}

	button {
		background-color: white;
		width: 17rem;
		height: 3rem;
		margin-right: 1rem;

		color: #3f3e8a;
		text-align: center;
		font-family: Poppins;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.015rem;
		border-radius: 1rem;
	}

	.text {
		width: 44rem;

		font-size: 1.125rem;
		line-height: 161.102%; /* 1.81238rem */
		letter-spacing: 0.06188rem;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4rem;
		line-height: normal;
		letter-spacing: 0.04rem;
	}

	.text,
	h1 {
		color: #fff;
		font-family: Syncopate;
		font-style: normal;
		font-weight: 700;
	}

	.grid-container-a,
	.grid-container-b {
		display: none;
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
		/* color: #221f29; */
		font-family: 'Syncopate', sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.24px;
		padding-top: 20px;
		color: white;
	}

	.github {
		font-family: 'Poppins', sans-serif;
		color: white;
		font-size: 0.8rem;
	}

	.div {
		width: 250px;
		height: 250px;
		flex-shrink: 0;
		border-radius: 20px;
		background: #d9d9d9;
	}

	@media only screen and (min-width: 31em) {
		.grid-container-a,
		.grid-container-b {
			display: none;
			justify-items: center;

			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: 1fr 1fr;
			/* grid-column-gap: 100px; */
			grid-row-gap: 75px;
		}
	}

	@media only screen and (min-width: 45em) {
		.grid-container-a,
		.grid-container-b {
			display: none;
			justify-items: center;

			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 1fr 1fr;
			/* grid-column-gap: 100px; */
			grid-row-gap: 75px;
		}
	}

	@media only screen and (min-width: 68em) {
		.grid-container-a,
		.grid-container-b {
			display: none;
			justify-items: center;

			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr 1fr;
			/* grid-column-gap: 100px; */
			grid-row-gap: 75px;
		}
	}
</style>
