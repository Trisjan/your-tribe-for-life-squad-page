<script>
	// @ts-nocheck

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

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<!-- <Navbar /> -->

<section class="hero">
	<section class="text">
		{#if animate}
			<h1 in:fly={{ x: -200, easing: backOut, delay: 500 }}>
				<PrismicRichText field={slice.primary.title} />
			</h1>
		{/if}
		{#if animate}
			<section in:fly={{ x: -200, easing: backOut, delay: 1000 }}>
				<PrismicRichText field={slice.primary.content} />
			</section>
		{/if}
	</section>
	<section class="img-ufo">
		<PrismicImage field={slice.primary.hero_img} />
	</section>
</section>

<section class="button">
	<button id="button1">Squad A</button>
	<button id="button2">Squad B</button>
</section>

<!-- <div class="grid-container-a">
	{#each slice.items.slice(0, 3) as item}
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

<div class="grid-container-b">
	{#each slice.items.slice(22, 25) as item}
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
</div> -->

<div class="grid-container-a" id="option1">
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[0].github_link}>
				<PrismicImage field={slice.items[0].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[0].name}</div>
		<div class="github">@{slice.items[0].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[1].github_link}>
				<PrismicImage field={slice.items[1].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[1].name}</div>
		<div class="github">@{slice.items[1].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[2].github_link}>
				<PrismicImage field={slice.items[2].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[2].name}</div>
		<div class="github">@{slice.items[2].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[3].github_link}>
				<PrismicImage field={slice.items[3].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[3].name}</div>
		<div class="github">@{slice.items[3].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[4].github_link}>
				<PrismicImage field={slice.items[4].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[4].name}</div>
		<div class="github">@{slice.items[4].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[5].github_link}>
				<PrismicImage field={slice.items[5].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[5].name}</div>
		<div class="github">@{slice.items[5].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[6].github_link}>
				<PrismicImage field={slice.items[6].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[6].name}</div>
		<div class="github">@{slice.items[6].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[7].github_link}>
				<PrismicImage field={slice.items[7].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[7].name}</div>
		<div class="github">@{slice.items[7].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[8].github_link}>
				<PrismicImage field={slice.items[8].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[8].name}</div>
		<div class="github">@{slice.items[8].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[9].github_link}>
				<PrismicImage field={slice.items[9].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[9].name}</div>
		<div class="github">@{slice.items[9].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[10].github_link}>
				<PrismicImage field={slice.items[10].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[10].name}</div>
		<div class="github">@{slice.items[10].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[11].github_link}>
				<PrismicImage field={slice.items[11].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[11].name}</div>
		<div class="github">@{slice.items[11].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[12].github_link}>
				<PrismicImage field={slice.items[12].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[12].name}</div>
		<div class="github">@{slice.items[12].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[13].github_link}>
				<PrismicImage field={slice.items[13].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[13].name}</div>
		<div class="github">@{slice.items[13].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[14].github_link}>
				<PrismicImage field={slice.items[14].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[14].name}</div>
		<div class="github">@{slice.items[14].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[15].github_link}>
				<PrismicImage field={slice.items[15].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[15].name}</div>
		<div class="github">@{slice.items[15].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[16].github_link}>
				<PrismicImage field={slice.items[16].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[16].name}</div>
		<div class="github">@{slice.items[16].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[17].github_link}>
				<PrismicImage field={slice.items[17].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[17].name}</div>
		<div class="github">@{slice.items[17].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[18].github_link}>
				<PrismicImage field={slice.items[18].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[18].name}</div>
		<div class="github">@{slice.items[18].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[19].github_link}>
				<PrismicImage field={slice.items[19].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[19].name}</div>
		<div class="github">@{slice.items[19].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[20].github_link}>
				<PrismicImage field={slice.items[20].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[20].name}</div>
		<div class="github">@{slice.items[20].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[21].github_link}>
				<PrismicImage field={slice.items[21].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[21].name}</div>
		<div class="github">@{slice.items[21].github_tag}</div>
	</div>
</div>

<div class="grid-container-b" id="option2">
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[22].github_link}>
				<PrismicImage field={slice.items[22].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[22].name}</div>
		<div class="github">@{slice.items[22].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[23].github_link}>
				<PrismicImage field={slice.items[23].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[23].name}</div>
		<div class="github">@{slice.items[23].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[24].github_link}>
				<PrismicImage field={slice.items[24].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[24].name}</div>
		<div class="github">@{slice.items[24].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[25].github_link}>
				<PrismicImage field={slice.items[25].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[25].name}</div>
		<div class="github">@{slice.items[25].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[26].github_link}>
				<PrismicImage field={slice.items[26].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[26].name}</div>
		<div class="github">@{slice.items[26].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[27].github_link}>
				<PrismicImage field={slice.items[27].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[27].name}</div>
		<div class="github">@{slice.items[27].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[28].github_link}>
				<PrismicImage field={slice.items[28].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[28].name}</div>
		<div class="github">@{slice.items[28].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[29].github_link}>
				<PrismicImage field={slice.items[29].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[29].name}</div>
		<div class="github">@{slice.items[29].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[30].github_link}>
				<PrismicImage field={slice.items[30].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[30].name}</div>
		<div class="github">@{slice.items[30].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[31].github_link}>
				<PrismicImage field={slice.items[31].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[31].name}</div>
		<div class="github">@{slice.items[31].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[32].github_link}>
				<PrismicImage field={slice.items[32].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[32].name}</div>
		<div class="github">@{slice.items[32].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[33].github_link}>
				<PrismicImage field={slice.items[33].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[33].name}</div>
		<div class="github">@{slice.items[33].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[34].github_link}>
				<PrismicImage field={slice.items[34].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[34].name}</div>
		<div class="github">@{slice.items[34].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[35].github_link}>
				<PrismicImage field={slice.items[35].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[35].name}</div>
		<div class="github">@{slice.items[35].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[36].github_link}>
				<PrismicImage field={slice.items[36].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[36].name}</div>
		<div class="github">@{slice.items[36].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[37].github_link}>
				<PrismicImage field={slice.items[37].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[37].name}</div>
		<div class="github">@{slice.items[37].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[38].github_link}>
				<PrismicImage field={slice.items[38].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[38].name}</div>
		<div class="github">@{slice.items[38].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[39].github_link}>
				<PrismicImage field={slice.items[39].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[39].name}</div>
		<div class="github">@{slice.items[39].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[40].github_link}>
				<PrismicImage field={slice.items[40].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[40].name}</div>
		<div class="github">@{slice.items[40].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[41].github_link}>
				<PrismicImage field={slice.items[41].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[41].name}</div>
		<div class="github">@{slice.items[41].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[42].github_link}>
				<PrismicImage field={slice.items[42].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[42].name}</div>
		<div class="github">@{slice.items[42].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[43].github_link}>
				<PrismicImage field={slice.items[43].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[43].name}</div>
		<div class="github">@{slice.items[43].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[44].github_link}>
				<PrismicImage field={slice.items[44].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[44].name}</div>
		<div class="github">@{slice.items[44].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[45].github_link}>
				<PrismicImage field={slice.items[45].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[45].name}</div>
		<div class="github">@{slice.items[45].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[46].github_link}>
				<PrismicImage field={slice.items[46].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[46].name}</div>
		<div class="github">@{slice.items[46].github_tag}</div>
	</div>
	<div class="grid">
		<div class="div">
			<PrismicLink field={slice.items[47].github_link}>
				<PrismicImage field={slice.items[47].image} />
			</PrismicLink>
		</div>
		<div class="name">{slice.items[47].name}</div>
		<div class="github">@{slice.items[47].github_tag}</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Syncopate&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	/* .grid-container-a,
	.grid-container-b {
		display: none;
	} */

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
