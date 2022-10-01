<script>
	import Duration from '$lib/tools/video/duration.svelte'
	import Fullscreen from '$lib/tools/video/fullscreen.svelte'
  import Player from '$lib/tools/video/player.svelte'
	import Button from '$lib/tools/video/button.svelte'
	import Time from '$lib/tools/video/time.svelte'
	import Progress from '$lib/tools/video/progress.svelte'

	export let src
	export let poster = ''
	export let autoplay = false
	export let muted = false
	export let loop = false
	export let controls
	export let paused = true

	let time
	let duration
	let video
	let ui = true
	let timeout

	$: video

	function hideUi() {
		clearTimeout(timeout);

		timeout = setTimeout(function(){
			ui = false
		}, 2000);
	}

	function showUi() {
		ui = true
	}
</script>

<div class="relative">
	{#if controls}
		<div class="absolute bottom-0 z-10 bg-white flex px-2 py-1 w-full justify-center opacity-0 {ui ? 'opacity-100' : ''}">
			<Button bind:paused />
			<Time bind:time />
			<Progress bind:time bind:duration />
			<Duration {duration} />
			<Fullscreen bind:video />
		</div>
	{/if}

	<div on:mousemove={hideUi} on:mousemove={showUi} >
		<Button bind:paused>
			<Player bind:video bind:time bind:duration {paused} {src} {poster} {autoplay} {loop} {muted} />
		</Button>
	</div>
</div>