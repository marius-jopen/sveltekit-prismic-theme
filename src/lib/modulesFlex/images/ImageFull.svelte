<script>
	export let slice
    export let inputImage

	let image

	if (slice == undefined){
		image = inputImage
	} else {
		image = slice.primary.image
	}
</script>

<img class="w-screen h-screen object-cover" src="{image.Big.url}" alt="{image.alt}">