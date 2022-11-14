<script>
    import { onMount } from 'svelte'

		export let paused
    export let src
    export let poster = ''
		export let autoplay = false
		export let muted = false
		export let loop = false
		export let controls = false
		export let time
		export let duration
		export let video

    onMount(() => {
			if(autoplay == false) {
				paused = true

				if(muted == false) {
					video.volume = 1
				} else {
					video.volume = 0
				}
			} else {
				paused = false
				video.volume = 0
			}
    })

    function videoMute() {
			if(muted == false) {
				video.volume = 1
			} else {
				video.volume = 0
			}
    }
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
class="w-full"
bind:this={video}
on:load="{videoMute}"
bind:paused
bind:duration
bind:currentTime={time}
{poster}
{loop}
{controls}
playsinline >
	<source {src} type="video/mp4" />
	Your browser does not support the video tag.
</video>