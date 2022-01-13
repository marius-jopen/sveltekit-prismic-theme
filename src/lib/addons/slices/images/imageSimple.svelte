<script>
    import Lazy from '$lib/addons/lazyload/lazy.svelte'

	export let slice
    export let inputImage

	let image

	if (slice == undefined){
		image = inputImage
	} else {
		image = slice.primary.image
	}
</script>

<Lazy height={500} offset={200} fadeOption={{delay: 0, duration: 500}}>
    <img class="border-b border-lines" src="{image.Big.url}" alt="{image.alt}">
</Lazy>