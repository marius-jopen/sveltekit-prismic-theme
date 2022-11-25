<script>
	import Container from "$lib/tools/container.svelte"
  import GallerySlider1 from "$lib/prismic/modules/gallery-slider/gallery-slider-1.svelte"

	export let slice
	export let width = 'width-2xl'

	let gallerySlider = ''

	if(slice) {
		gallerySlider = slice.items
		width = slice.primary.width_gallery ? slice.primary.width_gallery : width
	}
</script>

<Container classesInner="{width}">
	<GallerySlider1 input={gallerySlider} />
</Container>