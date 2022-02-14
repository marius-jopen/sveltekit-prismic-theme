<script>
	// Import Modules which are used to display the content
	import ImageFullWidth from "$lib/modulesFlex/images/imageFullWidth/ImageFullWidth.svelte"

	// Get data from parent component
	export let input
</script>

<div>
	<ImageFullWidth inputImage={input.thumbnail} />
	<ImageFullWidth inputImage={input.thumbnail} />
	<ImageFullWidth inputImage={input.thumbnail} />
	<ImageFullWidth inputImage={input.thumbnail} />
	<ImageFullWidth inputImage={input.thumbnail} />
</div>