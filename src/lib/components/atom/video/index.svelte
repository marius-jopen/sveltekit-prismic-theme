<script>
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

{#if controls}
	{#if ui}
		<div class="fixed z-10 bg-white">
			<AtomVideoPlay bind:paused />
			<AtomVideoProgress bind:time bind:duration />
			<AtomVideoTime bind:time />
			<AtomVideoDuration {duration} />
			<AtomVideoFullscreen bind:video />
		</div>
		{/if}
{/if}

<div on:mousemove={hideUi} on:mousemove={showUi} >
	<AtomVideoPlay bind:paused>
		<AtomVideoPlayer bind:video bind:time bind:duration {paused} {src} {poster} {autoplay} {loop} {muted} />
	</AtomVideoPlay>
</div>