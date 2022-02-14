<script>
	import ImageFullWidth from "$lib/modulesFlex/images/ImageFullWidth/ImageFullWidth.svelte"

	export let input
</script>

<div>
	<ImageFullWidth inputImage={input.thumbnail} />
	<ImageFullWidth inputImage={input.thumbnail} />
	<ImageFullWidth inputImage={input.thumbnail} />
	<ImageFullWidth inputImage={input.thumbnail} />
	<ImageFullWidth inputImage={input.thumbnail} />
</div>