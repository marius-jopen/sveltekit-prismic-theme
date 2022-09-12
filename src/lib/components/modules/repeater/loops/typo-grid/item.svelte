<script>
	// Get data from parent component
    export let item
	export let type
</script>

<a data-sveltekit-prefetch class="w-full sm:w-1/2 md:w-1/3 border-lines border-b p-4" href="/{type}s/{item.uid}">
	<div class="text-3xl sm:text-4xl lg:text-5xl">
		{item.data.sub_title[0].text}
	</div>

	<div class="pt-2">
		{item.data.title[0].text}
	</div>
</a>