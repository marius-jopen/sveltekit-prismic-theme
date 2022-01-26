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

<img class="border-b border-lines" src="{image.Big.url}" alt="{image.alt}">