<script>
    export let item
	export let type
</script>

<a sveltekit:prefetch class="w-1/3 border-lines border-b p-4" href="/{type}s/{item.uid}">
	<div class="text-5xl">
		{item.data.sub_title[0].text}
	</div>
	<div>
		{item.data.title[0].text}
	</div>
</a>