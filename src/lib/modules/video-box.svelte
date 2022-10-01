<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/text.svelte"
	import Video from "$lib/tools/video/index.svelte"

	export let text = ''
	export let poster = ''
	export let bgColor = ''
	export let width = ''
	export let src = ''
	export let slice

	if(slice) {
		src = slice.primary.video_video.url
		poster = slice.primary.video_poster_video.url
		text = slice.primary.video_caption_video
		width = slice.primary.width_video
	}
</script>

<Container {bgColor} {width} >
	<Video {src} {poster} classes="rounded-3xl overflow-hidden" muted loop autoplay />
	<Text field={text} classes="text-xl text-center" />
</Container>