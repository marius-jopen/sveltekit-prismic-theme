<script>
	import Duration from '$lib/tools/video/duration.svelte'
	import Fullscreen from '$lib/tools/video/fullscreen.svelte'
  import Player from '$lib/tools/video/player.svelte'
	import Button from '$lib/tools/video/button.svelte'
	import ButtonScreen from '$lib/tools/video/button-screen.svelte'
	import Time from '$lib/tools/video/time.svelte'
	import Progress from '$lib/tools/video/progress.svelte'

	export let src240p = ''
	export let src360p = ''
	export let src540p = ''
	export let src720p = ''
	export let src1080p = ''
	export let srcVideo = ''
	export let poster = ''
	export let autoplay = false
	export let muted = false
	export let loop = false
	export let controls = false
	export let paused = true
	export let classes

	let time
	let duration
	let video
	let ui = true
	let timeout
	let width = ''
	let src
	let videoResponsiveMaxCount = 5

	let srcset = {
		0 : src240p,
		1 : src360p,
		2 : src540p,
		3 : src720p,
		4 : src1080p,
		5 : srcVideo
	}

	$: video
	$: width
	$: src

	// >>> Functions to define the responsive video source
	$: if(width <= 240) {
		VideoResponsive(0)
	} else if (width <= 360) {
		VideoResponsive(1)
	} else if (width <= 540) {
		VideoResponsive(2)
	} else if (width <= 720) {
		VideoResponsive(3)
	} else {
		VideoResponsive(4)
	}

	function VideoResponsive(value) {
		// Checks if the current width has a corresponding video-size
		if(!srcset[value] == '' || !srcset[value] == undefined || !srcset[value] == null) {
			src = srcset[value]
		} else {
			if (--videoResponsiveMaxCount > 0) {
				VideoResponsive(value + 1)
			} if (videoResponsiveMaxCount == 5) {
				src = srcset[5]
			}
		}
	}
	// <<< Functions to define the responsive video source

	// >>> Functions to hide and show the UI
	function hideUi() {
		clearTimeout(timeout);

		timeout = setTimeout(function(){
			ui = false
		}, 2000);
	}

	function showUi() {
		ui = true
	}
	// <<< Functions to hide and show the UI
</script>

<div bind:offsetWidth={width} class="relative {classes}">
	{#if controls}
		<div class="absolute bottom-0 z-10 bg-background-1 flex px-2 py-1 w-full justify-center transition-opacity opacity-0 {ui ? 'opacity-100' : ''}">
			<Button bind:paused />
			<Time bind:time />
			<Progress bind:time bind:duration />
			<Duration {duration} />
			<Fullscreen bind:video />
		</div>
	{/if}

	<div on:mousemove={hideUi} on:mousemove={showUi} >
		<ButtonScreen bind:paused controls={controls}>
			{#key src}
				<Player bind:video bind:time bind:duration {paused} {src} {poster} {autoplay} {loop} {muted}/>
			{/key}
		</ButtonScreen>
	</div>
</div>