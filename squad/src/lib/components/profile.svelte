<div class="grid-container">
	<div class="grid">
		<div class="div1" />
		<div class="name">Eliza Lacroes</div>
		<div class="github">@moonlightlizaa</div>
	</div>
	<div class="grid">
		<div class="div2" />
		<div class="name">Eliza Lacroes</div>
		<div class="github">@moonlightlizaa</div>
	</div>
	<div class="grid">
		<div class="div3" />
		<div class="name">Eliza Lacroes</div>
		<div class="github">@moonlightlizaa</div>
	</div>
	<div class="grid">
		<div class="div4" />
		<div class="name">Eliza Lacroes</div>
		<div class="github">@moonlightlizaa</div>
	</div>
	<div class="grid">
		<div class="div5" />
		<div class="name">Eliza Lacroes</div>
		<div class="github">@moonlightlizaa</div>
	</div>
	<div class="grid">
		<div class="div6" />
		<div class="name">Eliza Lacroes</div>
		<div class="github">@moonlightlizaa</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Syncopate&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.grid-container {
		display: grid;
		justify-items: center;

		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: 1fr 1fr;
		/* grid-column-gap: 100px; */
		grid-row-gap: 75px;
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

	.div1,
	.div2,
	.div3,
	.div4,
	.div5,
	.div6 {
		width: 300px;
		height: 300px;
		flex-shrink: 0;
		border-radius: 20px;
		background: #d9d9d9;
	}

	@media only screen and (min-width: 31em) {
	}

	@media only screen and (min-width: 45em) {
		.grid-container {
			display: grid;
			justify-items: center;

			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: 1fr 1fr;
			/* grid-column-gap: 100px; */
			grid-row-gap: 75px;
		}
	}

	@media only screen and (min-width: 68em) {
		.grid-container {
			display: grid;
			justify-items: center;

			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 1fr 1fr;
			/* grid-column-gap: 100px; */
			grid-row-gap: 75px;
		}
	}
</style>
