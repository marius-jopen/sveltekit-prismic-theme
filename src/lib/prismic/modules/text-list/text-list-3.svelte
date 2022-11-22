<script>
	import Text from '$lib/prismic/atoms/text.svelte'
	import LayoutAccordeon from "$lib/tools/accordeon/accordeon.svelte"
	import { asText } from '@prismicio/helpers'

	export let input
</script>

{#each input as item}
	<LayoutAccordeon inputHeadline={asText(item.title_text_list)} >
		<Text field={item.text_text_list} />
	</LayoutAccordeon>
{/each}