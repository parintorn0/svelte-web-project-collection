<script>
</script>

<div class="home">
	<div class="container head">
		<span class="welcome">
			Welcome to my SvelteJS
		</span>
		<span class="welcome">
			web project lists
		</span>
	</div>
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
		font-size: 30px;
		font-family: Arial, Helvetica, sans-serif;
		background: #f5f5f5;
		display: flex;
		flex-direction: column;
	}
	.body {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		margin: 10vi;
	}

	.head.container{
		position: relative;
		color: rgba(17,17,17,1);
		font-weight: 800;
		height: 10%;
		text-align: center;
		padding-top: 10rem;
	}


	.body .container{
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 400px;
		flex-flow: column;
		background-color: rgba(17,17,17,0.4);
		margin: 25px;
	}

	a{
		display: flex;
		align-items: center;
		border-radius: 100px;
		text-decoration: none;
		color: #f5f5f5;
		width: 100%;
	}

	a:hover {
		background-color: rgba(17,17,17,0.1);
	}

	.txt {
		font-weight: 600;
		color: #f5f5f5;
		margin-left: 20px;
		margin-right: 20px;
	}
	img {
		height: 100px;
		width: 100px;
	}
</style>
