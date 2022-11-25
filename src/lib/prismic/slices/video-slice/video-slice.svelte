<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Video from "$lib/tools/video/index.svelte"

	export let text = ''
	export let poster = ''
	export let width = 'width-full'
	export let src240p = ''
	export let src360p = ''
	export let src540p = ''
	export let src720p = ''
	export let src1080p = ''
	export let srcVideo = ''
	export let slice

	if(slice) {
		src240p = slice.primary.video_240_video
		src360p = slice.primary.video_360_video
		src540p = slice.primary.video_540_video
		src720p = slice.primary.video_720_video
		src1080p = slice.primary.video_1080_video
		srcVideo = slice.primary.video_video
		poster = slice.primary.video_poster_video.url+"?&w=800&fm=webp&lossless=true"
		text = slice.primary.video_caption_video
		width = slice.primary.width_video ? slice.primary.width_video : width
	}
</script>

<Container classesInner="{width} pt-4 pb-8" >
	<Video {src240p} {src360p} {src540p} {src720p} {src1080p} {srcVideo} {poster} classes="rounded-3xl overflow-hidden" muted loop autoplay />
	<Text field={text} classes="text-center" />
</Container>