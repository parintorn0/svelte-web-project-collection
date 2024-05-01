<script>
	import Dragdrop from "./Dragdrop.svelte";
	import { fade } from "svelte/transition";
	let isHide;
</script>

	<div class="image-viewer">
		{#if !isHide}
			<div id='guide' transition:fade>
				<div id='key-guide'>Keys Function</div>
				<div class=container>
					<div class="grid-display">
						<span class="one">a</span>
						<span class="two">:</span>
						<span class="three">See fit screen</span>
					</div>
					<div class="grid-display">
						<span class="one">s</span>
						<span class="two">:</span>
						<span class="three">See fit height</span>
					</div>
					<div class="grid-display">
						<span class="one">d</span>
						<span class="two">:</span>
						<span class="three">See fit width</span>
					</div>
					<div class="grid-display">
						<span class="one">f</span>
						<span class="two">:</span>
						<span class="three">See original</span>
					</div>
				</div>
			</div>
		{/if}
		<Dragdrop bind:isHide/>
	</div>

<style>
	.image-viewer {
		height: 100%;
		display: flex;
		justify-content: center;
	}
	#guide {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.7);
		color: rgb(240, 240, 240);
		border-radius: 0 0 50px 50px ;
		font-weight: 600;
		width: 15%;
		height: 16%;
		font-family: Arial, Helvetica, sans-serif;
		padding: 5px 20px 10px 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	#key-guide{
		font-size: 20px;
		font-weight: 800;
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	.grid-display {
		padding: 3px;
		font-size: 18px;
		display: grid;
		grid-template-columns: 30px 30px 180px;
	}
	.one{
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.two{
		grid-column-start: 2;
		grid-column-end: 3;
	}
	.three{
		grid-column-start: 3;
		grid-column-end: 4;
	}

</style>

	