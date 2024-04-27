<script>
    import { fade } from "svelte/transition";
    let hover = false;
    let fileList=[];
    let haveImg = false;
    let currentImg='';
    let currentIndex=0;
    let isRight=true;
    export let isHide=false;
    function handleDrop(e){
        const data=e.dataTransfer;
        const files = data.files;
        const fileArray=[...files];
        for(let i=0;i<fileArray.length;i++){
            fileList = [...fileList,{'url':URL.createObjectURL(fileArray[i]), 'type':fileArray[i].type}];
        }
        if(!haveImg){
            currentImg=fileList[0].url;
            currentIndex=0;
            haveImg=true;
        }
    }
    function remove(index){
        if(fileList[index].url===currentImg){
            currentImg=fileList[0].url;
            currentIndex=0;
        }
        fileList=fileList.filter((item)=>item!=fileList[index]);
        if(fileList.length===0){
            currentImg='';
            haveImg=false;
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="image-viewer">
    {#if !isHide}
	<section class="droparea {hover ? 'hover':''}"
    on:dragenter|preventDefault={()=>hover = true}
    on:dragover|preventDefault={()=>hover = true}
    on:dragleave|preventDefault={()=>hover = false}
    on:drop|preventDefault={(e)=>{
        hover = false;
        handleDrop(e);
        }}
    transition:fade
    >
    {#if hover}
        <p class="drop-txt">Drop</p>
        <p class="drop-txt">Now</p>
    {:else}
        <p class="drop-txt">Drop</p>
        <p class="drop-txt">your</p>
        <p class="drop-txt">Image</p>
        <p class="drop-txt">here</p>
    {/if}
    </section>
    <div class="img-nav" transition:fade>
        {#key fileList}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            {#each fileList as file, index}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img class="img-list"
                class:select={index===currentIndex} src={file.url} alt="" on:click={()=>{currentImg=file.url; currentIndex=index}}>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span class="remove" on:click={()=>remove(index)}>&times</span>
            {/each}
        {/key}
    </div>
    {/if}
    <div class="container" on:click|preventDefault={()=>{
        isHide=!isHide;
    }}>
        <img class="current" src={currentImg} alt="">
    </div>
</div>

<style>
	.image-viewer {
		height: 100%;
		width: 100%;
		background: #f5f5f5;
	}

    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img.current {
        max-height: 100%;
        max-width: 100%;
    }

    .droparea {
        position: absolute;
        right: 0;
        top: 0;
        margin: 1%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 10%;
        height: 70%;
        border: 4px dashed grey;
        border-radius: 15px;
        transition: margin 0.2s;
    }

    .droparea.hover {
        background-color: rgba(17,17,17,0.5);
        border: 4px solid rgba(17,17,17,1);
    }

    .drop-txt{
        font-family: Arial, Helvetica, sans-serif;
        font-size: x-large;
        font-weight: 800;
        margin: 1rem;
    }

    .img-nav {
        bottom: 0;
        position: absolute;
        height: 25%;
        width: 100%;
        display: flex;
        background-color: rgba(17,17,17,0.5);
        overflow-x: scroll;
    }
    
    .img-list {
        margin: 30px;
        width: 150px;
        height: 150px;
        object-fit: contain;
        border: 3px solid rgba(17,17,17,1);
        border-radius: 35px;
        background-color: #f5f5f5;
    }

    .img-list.select{
        border: 3px solid green;
    }

    .remove{
        color: #f5f5f5;
        width: 20px;
        font-size: 50px;
        margin-left: -20px;
        margin-top: 15px;
        cursor: default;
    }
    .remove:hover{
        font-weight: 900;
    }
    ::-webkit-scrollbar {
        display: block;
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: rgb(51, 51, 51);
    }
</style>

<svelte:window on:keydown|preventDefault={(e)=>{
    function goLeft() {
        if(currentIndex>0){
            currentIndex--;
            currentImg=fileList[currentIndex].url;
        }
        if(currentIndex<=0){
            isRight=true;
        }
        else{
            isRight=false;
        }
    }
    function goRight() {
        if(currentIndex<fileList.length-1){
            currentIndex++;
            currentImg=fileList[currentIndex].url;
        }
        if(currentIndex>=fileList.length-1){
            isRight=false;
        }
        else{
            isRight=true;
        }
    }
    if(e.code==='ArrowLeft' || e.code==='ArrowUp'){
        goLeft();
    }
    else if(e.code==='ArrowRight' || e.code==='ArrowDown'){
        goRight();
    }
    else if(e.code==='Space'){
        if(isRight){
            goRight();
        }
        else{
            goLeft();
        }
    }
    else if(e.code==='Escape'){
        isHide=true;
    }
    else if(e.code==='Tab'){
        isHide=!isHide;
    }
    
}}
/>
