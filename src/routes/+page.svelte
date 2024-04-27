<script>
</script>

<div class="home">
	<span class="welcome">
		Welcome to my SvelteJS web project lists
	</span>
	<div class="body">
		<div class="container">
			<a href="/image-viewer">
				<img src="image_logo.png" alt="">
				<span class="txt">Image Viewer</span>
			</a>
			<a href="/video-player">
				<img src="video_logo.png" alt="">
				<span class="txt">Video Player</span>
			</a>
		</div>
	</div>
</div>



<style>
	.home {
		height: 100%;
		width: 100%;
		font-size: 50px;
		font-family: Arial, Helvetica, sans-serif;
		background: #f5f5f5;
	}
	.welcome {
		position: absolute;
		width: 100%;
		padding-top: 5%;
		color: rgba(17,17,17,1);
		font-weight: 800;
		text-align: center;
	}
	.body {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
	}


	.container{
		border-radius: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30%;
		flex-flow: column;
		background-color: rgba(17,17,17,0.4);
	}

	a{
		display: flex;
		align-items: center;
		border-radius: 100px;
		text-decoration: none;
		color: #f5f5f5;
		width: 100%;
		margin: 5%, 0;
	}

	a:hover {
		background-color: rgba(17,17,17,0.1);
	}

	.txt {
		font-weight: 600;
		color: #f5f5f5;
	}
	img {
		height: 200px;
	}
</style>
