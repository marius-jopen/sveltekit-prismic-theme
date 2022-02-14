<script>
	// Import Modules which are used to display the content
	import ImageFullWidth from "$lib/modules-flex/images/image-full-width/image-full-width.svelte"
	
	// Get data from parent component
	export let input
</script>

<div>
	<ImageFullWidth inputImage={input.thumbnail} />
</div>