<script>
    export let slice
    export let inputVideoUrl
	export let inputVideoPoster

	let videoUrl
	let videoPoster
	let videoVimeo

	if (slice == undefined){
		videoUrl = inputVideoUrl
		videoPoster = inputVideoPoster
	} else {
		videoUrl = slice.primary.video.url
		videoVimeo = slice.primary.vimeo[0].text
		videoPoster = slice.primary.preview_image.Big.url

		if(videoVimeo) {
			videoUrl = videoVimeo
		}
	}

	let iconColor = "black"
	let time = 0;
	let duration;
	let paused = true;
	let lastMouseDown;
	let video
	let hideControl = false
	var timeout

	function HideControls() {
		clearTimeout(timeout);
		timeout = setTimeout(function(){
			if(paused == false ) {
				hideControl = true
			}
		}, 2000);
	}

	function unHideControls() {
		hideControl = false
	}

	function handleMove(e) {
		if (!duration) return
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return
		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
		const { left, right } = this.getBoundingClientRect()
		time = duration * (clientX - left) / (right - left)
	}

	function playButton() {
		if(paused == false) {
			paused = true
			hideControl = false
		} else {
			paused = false
		}
	}

	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play()
			else e.target.pause()
		}
	}

	function format(seconds) {
		if (isNaN(seconds)) return '0:00'
		const minutes = Math.floor(seconds / 60)
		seconds = Math.floor(seconds % 60)
		if (seconds < 10) seconds = '0' + seconds
		return `${minutes}:${seconds}`
	}

	function openFullscreen() {
		video.webkitEnterFullscreen()
		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if(video.mozRequestFullScreen){
			video.mozRequestFullScreen()
		}
	}
</script>

<div on:mousemove={HideControls} on:mousemove={unHideControls} class="relative w-full" >
	<div class="video-box cursor-pointer relative top-0 left-0 w-full">
		{#if videoUrl}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				id="video"
				poster="{videoPoster}"
				class="w-full h-full  object-contain"
				src={videoUrl}
				bind:this={video}
				on:mouseup={handleMouseup}
				on:click={playButton}
				bind:currentTime={time}
				bind:duration
				bind:paused
				loop
				playsinline
				>
			</video>
		{/if}
	</div>

	<div class:hideControlsSoft="{hideControl === true}" class="border-lines border-b opacity-100 transition-opacity h-8 absolute bottom-0 bg-background w-full z-10 px-4 text-lg pt-1 flex justify-between">
		<div class="flex">
			<div class="pr-4 playpause cursor-pointer pt-0.5" on:mousedown={playButton} >
				{#if paused}
					<svg width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20 10L5 18.6603L5 1.33974L20 10Z" fill="{iconColor}"/>
					</svg>
				{:else}
					<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="4" y="1" width="5" height="18" fill="{iconColor}"/>
						<rect x="12" y="1" width="5" height="18" fill="{iconColor}"/>
					</svg>
				{/if}
			</div>

			<div class="pr-4 -mt-0.5 hidden sm:block">
				{format(time)}
			</div>
		</div>

		<div class="progress-box w-full hidden sm:block">
			<progress
			class="appearance-none cursor-pointer pr-4 block w-full h-0.5 mt-2.5"
			value="{(time / duration) || 0}"
			on:mousemove={handleMove}
			on:touchmove|preventDefault={handleMove}
			on:mouseup={handleMouseup}
			/>
		</div>

		<div class="flex">
			<div class="pr-4 hidden -mt-0.5 sm:block">
				{format(duration)}
			</div>

			<div class="pt-0.5 full cursor-pointer" on:mousedown={openFullscreen}>
				<svg width="18" height="18" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 9.46648V15.3331H6.86667" stroke="{iconColor}"/>
					<path d="M9.79956 15.3337H15.6662V9.467" stroke="{iconColor}"/>
					<path d="M15.6667 6.53418L15.6667 0.667513L9.80008 0.667512" stroke="{iconColor}"/>
					<path d="M6.86719 0.666992L1.00052 0.666992L1.00052 6.53366" stroke="{iconColor}"/>
				</svg>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.hideControlsSoft {
		opacity: 0 !important;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0,0,0,0.2);
	}

	progress::-webkit-progress-value {
		background-color: black;
	}
</style>