<script>
	// Import the store for passing props to other comps
	import { filmControlStatus } from '$lib/functionality/store/store'

	// Get data from parent component or from Slice function
    export let slice
    export let inputVideoUrl
	export let inputVideoPoster
	export let inputHeight
	export let inputIndex
	export let inputSlideIndex
	export let inputSliderClicked

	// Define variables which get used in this component
	let videoUrl
	let videoPoster
	let videoVimeo
	let height
	let sliderClicked
	let index
	let slideIndex

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		videoUrl = inputVideoUrl
		videoPoster = inputVideoPoster
		height = inputHeight
		sliderClicked = inputSliderClicked
		index = inputIndex
		slideIndex = inputSlideIndex
	} else {
		videoUrl = slice.primary.video.url
		videoVimeo = slice.primary.vimeo[0].text
		videoPoster = slice.primary.video_poster.Big.url
		height = "h-40vw"
		sliderClicked = false
		index = 0
		slideIndex = 0

		if(videoVimeo) {
			videoUrl = videoVimeo
		} 
	}
        
	// Define variables which will be used for the video controller
	let iconColor = "black" // Set the icon color
	let time = 0;
	let duration;
	let paused = true;
	let lastMouseDown;
	let video
	let hideControl = false
	let timeout
	let sound = true

	// When status changes, then the inactive video gets paused
	// And the active video plays
	$: if(index == slideIndex) {
		paused = false
	} else {
		paused = true
		hideControl = false
	}

	// Checks if the slider above already has been clicked. 
	// And if not: pause the video. Prevents the video to play by accident on other sliders
	$: if(sliderClicked == false) {
		paused = true
	}

	// When the status changes, write this into the store
	$: hideControl, filmControlStatus.set(hideControl)

	// Function to hide the controls after 2 seconds
	function HideControls() {
		clearTimeout(timeout);

		timeout = setTimeout(function(){
			if(paused == false ) {
				hideControl = true
			}
		}, 2000);
	}

	// Function to show the controls again
	function unHideControls() {
		hideControl = false
	}

	// Function to control the progress bar
	function handleMove(e) {
		if (!duration) return
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return
		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
		const { left, right } = this.getBoundingClientRect()
		time = duration * (clientX - left) / (right - left)
	}

	// Function to play and pause the video by clicking on the button
	function playButton() {
		if(paused == false || paused == undefined) {
			paused = true
			hideControl = false
		} else {
			paused = false
		}
	}

	// Function to play and pause the video by clicking on the video
	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play()
			else e.target.pause()
		}
	}

	// Function to display the time of the video
	function format(seconds) {
		if (isNaN(seconds)) return '0:00'
		const minutes = Math.floor(seconds / 60)
		seconds = Math.floor(seconds % 60)
		if (seconds < 10) seconds = '0' + seconds
		return `${minutes}:${seconds}`
	}

	// Function to open the video for fullscreen
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

	// Toggle Sound
	function soundStatus() {
		if(sound == true) {
			sound = false
			video.volume = 0
		} else {
			sound = true
			video.volume = 1
		}
	}
</script>

<div on:mousemove={HideControls} on:mousemove={unHideControls} class="relative w-full {height}" >
	<div class="bg-black video-box cursor-pointer relative top-0 left-0 w-full {height}">
		{#if videoUrl}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				id="video"
				poster="{videoPoster}"
				class="{height} w-full object-cover"
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

	<!-- Controls -->
	<div class:hideControlsSoft="{hideControl === true}" class=" border-lines border-t opacity-100 transition-opacity h-8 absolute bottom-0 bg-background w-full z-10 px-4 text-lg pt-1 flex justify-between">
		<div class="flex">
			<!-- Play and Pause button -->
			<div class="pr-4 playpause cursor-pointer pt-0.5" on:mousedown={e => playButton()} >
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

			<!-- Current time -->
			<div class="pr-4 -mt-0.5 hidden sm:block">
				{format(time)}
			</div>
		</div>

		<!-- Progress bar -->
		<div class="progress-box w-full hidden sm:block">
			<progress
			class="cursor-pointer pr-4"
			value="{(time / duration) || 0}"
			on:mousemove={handleMove}
			on:touchmove|preventDefault={handleMove}
			on:mouseup={handleMouseup}
			/>
		</div>

		<div class="flex">
			<!-- Total time -->
			<div class="pr-4 hidden -mt-0.5 sm:block">
				{format(duration)}
			</div>

			<!-- Fullscreen button -->
			<div class="pt-0.5 full cursor-pointer" on:mousedown={openFullscreen}>
				<svg width="18" height="18" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 9.46648V15.3331H6.86667" stroke="{iconColor}"/>
					<path d="M9.79956 15.3337H15.6662V9.467" stroke="{iconColor}"/>
					<path d="M15.6667 6.53418L15.6667 0.667513L9.80008 0.667512" stroke="{iconColor}"/>
					<path d="M6.86719 0.666992L1.00052 0.666992L1.00052 6.53366" stroke="{iconColor}"/>
				</svg>
			</div>
		</div>

		<div class="sound cursor-pointer text-right -mt-0.5 hidden sm:block pl-3" on:mousedown={soundStatus}>
			<!-- Uses non-breaking space to keep the words together -->
			Sound&nbsp;{sound ? 'on' : 'off'}
		</div>
	</div>
</div>

<style lang="postcss">
	.hideControlsSoft {
		opacity: 0 !important;
	}

	progress {
		display: block;
		width: 100%;
		padding-top: 9px;
		padding-bottom: 4px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0,0,0,0.2);
	}

	progress::-webkit-progress-value {
		background-color: black;
	}

	.sound {
		width: 110px;
	}
</style>