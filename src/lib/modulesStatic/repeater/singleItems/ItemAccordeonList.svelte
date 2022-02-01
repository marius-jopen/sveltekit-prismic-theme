<script>
    export let item
	export let type
</script>

<a sveltekit:prefetch href="/{type}s/{item.uid}" class="flex text-xl py-3 px-4 w-full border-b border-lines">
	<div class="w-1/2">
		{item.data.title[0].text}
	</div>

	{#if item.data.sub_title[0]}
		<div class="w-1/2">
			{item.data.sub_title[0].text}
		</div>
	{/if}
</a>