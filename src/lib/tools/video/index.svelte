<script>
	import Duration from '$lib/tools/video/duration.svelte'
	import Fullscreen from '$lib/tools/video/fullscreen.svelte'
  import Player from '$lib/tools/video/player.svelte'
	import Play from '$lib/tools/video/play.svelte'
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
		{#if ui}
			<div class="absolute z-10 bg-white">
				<Play bind:paused />
				<Progress bind:time bind:duration />
				<Time bind:time />
				<Duration {duration} />
				<Fullscreen bind:video />
			</div>
			{/if}
	{/if}

	<div on:mousemove={hideUi} on:mousemove={showUi} >
		<Play bind:paused>
			<Player bind:video bind:time bind:duration {paused} {src} {poster} {autoplay} {loop} {muted} />
		</Play>
	</div>
</div>