<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import { onMount } from 'svelte';
	import { kebabCase } from '$lib/tools/functions/strings'
	import { glossaryAll } from '$lib/prismic/functionality/stores'
  import Image from "$lib/prismic/atoms/image.svelte";
	import { fade } from 'svelte/transition';

	export let text
	export let centered = ''
	export let width = 'width-2xl'
	export let classes = ""
	export let color = "bg-neutral-200"

	const glossaryList = []
	let glossary
	let posX = ''
	let posY = ''
	let activeDesktop = false
	let activeMobile = false
	let id
	let innerWidth

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

			if(innerWidth > 640) {
				element.addEventListener('mousemove', e => mouseEnter(e, element))
				element.addEventListener('mouseleave', e => mouseLeave(e, element))
			}

			if(innerWidth < 640) {
				element.addEventListener('click', e => mouseClickOpen(e, element))
			}

			return () => {
				element.removeEventListener('mousemove', mouseEnter())
				element.removeEventListener('mouseleave', mouseLeave())
				element.removeEventListener('click', mouseClickOpen())
			}
		})
  })

	function mouseEnter(e, element) {
		posX = e.clientX
		posY = e.clientY
		activeDesktop = true
		id = (kebabCase(element.outerText.toLowerCase()))
	}

	function mouseLeave() {
		activeDesktop = false
	}

	function mouseClickOpen(e, element) {
		posY = e.clientY
		activeMobile = true
		id = (kebabCase(element.outerText.toLowerCase()))
	}

	function mouseClickClose(e, element) {
		activeMobile = false
	}

	function getContent(itemUid) {
		let currentitem = $glossaryAll.find(i => i.uid == itemUid)

		return currentitem
	}
</script>

<svelte:window bind:innerWidth />

{#each glossaryList as item}
	{#if activeDesktop && item.uid == id}
		<div transition:fade="{{duration: 200 }}" class="{color} hidden sm:block z-40 -mt-2 -ml-4 pointer-events-none rounded-2xl absolute px-4 py-3 w-1/5" style=' left: {posX}px;'>
			<div class="pb-2">
				{item.name}
			</div>

			<Image src={getContent(item.uid).data.thumbnail} classes="rounded-3xl" />
			<Text field={getContent(item.uid).data.description} classes="pt-2" />
		</div>
	{/if}

	{#if activeMobile && item.uid == id}
		<div on:click={mouseClickClose} transition:fade="{{duration: 200 }}" class="block sm:hidden z-40 -mt-4 absolute w-full left-0" style='top: {posY}px;'>
			<div class="mx-auto w-11/12 rounded-2xl  px-4 py-3 {color}  ">
				<div class="pb-2">
					{item.name}
				</div>

				<Image src={getContent(item.uid).data.thumbnail} classes="rounded-3xl" />
				<Text field={getContent(item.uid).data.description} classes="pt-2" />
			</div>
		</div>
	{/if}
{/each}

<Container classesInner="{width} pt-4 pb-8m glossary-slice {classes}" >
	<Text field={text} classes="{centered ? 'text-center' : ''}" />
</Container>

<style lang="postcss">
	@media screen and (min-width: 640px) {
		:global(.glossary-slice	.glossary) {
			@apply cursor-none bg-red-200 rounded-full px-4;
		}
	}

	@media screen and (max-width: 640px) {
		:global(.glossary-slice	.glossary) {
			@apply bg-red-200 rounded-full px-4;
		}
	}
</style>