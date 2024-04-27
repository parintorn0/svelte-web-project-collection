<script>
	import Dragdrop from "./Dragdrop.svelte";
</script>

<div class="image-viewer">
	<div id='guide'>
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
	<Dragdrop />
</div>

<style>
	.image-viewer {
		display: flex;
		height: 100%;
		width: 100%;
		background: #f5f5f5;
		justify-content: center;
	}
	#guide {
		top: -60px;
		position: absolute;
		z-index: 1;
		padding: 20px;
		padding-top: 70px;
		background-color: rgba(0, 0, 0, 0.5);
		color: rgb(240, 240, 240);
		border-radius: 50px;
		font-weight: 600;
		width: 300px;
		display: flex;
		flex-direction: column;
		font-family: Arial, Helvetica, sans-serif;
	}

	#key-guide{
		text-align: center;
		margin-bottom: 40px;
		font-size: 25px;
		font-weight: 800;
	}

	.grid-display {
		font-size: 20px;
		display: grid;
		grid-template-columns: 20px 20px 160px;
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
