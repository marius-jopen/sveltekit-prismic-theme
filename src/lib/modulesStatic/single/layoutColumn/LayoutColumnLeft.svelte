<script>
	import ImageSimple from "$lib/modulesFlex/images/ImageSimple.svelte"

	export let input
</script>

<div>
	<ImageSimple inputImage={input.thumbnail} />
	<ImageSimple inputImage={input.thumbnail} />
	<ImageSimple inputImage={input.thumbnail} />
	<ImageSimple inputImage={input.thumbnail} />
	<ImageSimple inputImage={input.thumbnail} />
</div>