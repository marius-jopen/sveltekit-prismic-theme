<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import { onMount } from 'svelte';
	import { kebabCase } from '$lib/tools/strings'
	import { glossaryAll } from '$lib/prismic/stores'

	export let text
	export let centered = ''
	export let width = 'width-2xl'
	export let slice

	if(slice) {
		text = slice.primary.text_text
		centered = slice.primary.centered_text
		width = slice.primary.width_text ? slice.primary.width_text : width
	}

	const glossaryList = []

	let glossary
	let posX = ''
	let posY = ''
	let active = false
	let glossaryItems
	let id

	onMount(() => {
		glossary = document.querySelectorAll('.glossary')

		let glossaryLength = glossary.length

		glossary.forEach(function (element, index) {
			// give each item an ID
			document.getElementsByClassName('glossary')[index].setAttribute('id', (kebabCase(element.outerText.toLowerCase())))

			// Create Object and push to array
			var obj = {}

			obj["name"] = element.outerText
			obj["uid"] = kebabCase(element.outerText.toLowerCase())

			glossaryList.push(obj)
		})

		glossaryList.length = glossaryLength

		glossary.forEach(function (element) {
			element = document.getElementById(kebabCase(element.outerText.toLowerCase()))

			element.addEventListener('mousemove', e => mouseEnter(e, element))
			element.addEventListener('mouseleave', e => mouseLeave(e, element))

			return () => {
				element.removeEventListener('mousemove', mouseEnter())
				element.removeEventListener('mouseleave', mouseLeave())
			}
		})
  })

	glossaryAll.subscribe(value => {
		glossaryItems = value
	})

	function mouseEnter(e, element) {
		posX = e.clientX
		posY = e.clientY
		active = true
		id = (kebabCase(element.outerText.toLowerCase()))
	}

	function mouseLeave() {
		active = false
	}

	function getContent(itemUid) {
		let currentitem = glossaryItems.find(i => i.uid == itemUid)

		return currentitem
	}
</script>

{#each glossaryList as item}
	{#if active && item.uid == id}
		<div class="bg-neutral-200 z-40 -mt-2 -ml-4 pointer-events-none rounded-2xl absolute px-4 py-3 w-1/5" style='top: {posY}px; left: {posX}px;'>
			<div class="pb-2">
				{item.name}
			</div>

			<Text field={getContent(item.uid).data.description} />
		</div>
	{/if}
{/each}

<Container classes="{width} pt-4 pb-8m glossary-slice" >
	<Text field={text} classes="{centered ? 'text-center' : ''}" />
</Container>

<style lang="postcss">
	:global(.glossary-slice	.glossary) {
		@apply cursor-none bg-neutral-200 rounded-full px-4;
	}
</style>