<script>
	import Text from '$lib/prismic/atoms/text.svelte'

	export let input
</script>

<div>
	{#each input as item, index}
		<div class="h6 text-center pt-2 pb-1 index-{index}" id="index-"{index}>
				<Text plain field={item.title_text_list} />
		</div>

		<Text field={item.text_text_list} classes="pb-4 px-8" />
	{/each}
</div>