<script>
	// Import child components which are used in this module
	import Image from '$lib/components/atoms/image.svelte'

	// Import child components which are used in this module
    export let item
	export let type
</script>

<a data-sveltekit-prefetch href="/{type}s/{item.uid}" class="relative block w-full sm:w-1/2 md:w-1/3 border-t md:border-r -mt-0.5 border-lines">
	<div class="absolute top-3 left-4 sm:right-4 z-10 text-right uppercase tracking-widest text-xs pointer-events-none">
		{item.data.title[0].text}
	</div>

	<div class="absolute top-3 sm:top-auto sm:bottom-3 right-4 z-10 text-right uppercase tracking-widest text-xs pointer-events-none	">
		{item.data.sub_title[0].text}
	</div>

	<Image image={item.data.preview_image} imageSize={"Medium"} classes={'object-cover w-full md:h-40vw'} />
	<Image image={item.data.preview_image_hover} imageSize={"Medium"} classes={'transition opacity-0 hover:opacity-100 absolute top-0 left-0 object-cover w-full md:h-40vw'} />
</a>