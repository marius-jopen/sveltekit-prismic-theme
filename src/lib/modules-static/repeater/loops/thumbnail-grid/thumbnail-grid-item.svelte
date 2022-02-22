<script>
	// Import child components which are used in this module
    export let item
	export let type
</script>

<a sveltekit:prefetch href="/{type}s/{item.uid}" class="block relative w-full sm:w-1/3 border-b border-r border-lines">
	<!-- Image -->
	<img class="w-full object-cover h-70vw sm:h-40vw" src="{item.data.preview_image.Small.url}" alt="{item.data.preview_image.alt}">

	<!-- On Hover Text -->
	<div class="flex justify-center flex-col sm:opacity-0 hover:opacity-100 transition-opacity absolute left-0 top-0 w-full h-full">
		<div class="text-white text-center text-2xl px-8">
			{item.data.title[0].text}
		</div>
	</div>
</a>