<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Link from "$lib/prismic/atoms/link.svelte"

	export let slice

	let downloads

	if(slice) {
		downloads = slice.items
	}
</script>

<Container classesOuter="pt-4 pb-6 px-4" classesInner="width-full flex flex-wrap" >
	{#each downloads as item}
		<div class="flex gap-4 flex-col w-full sm:w-1/2">
			<div class="flex flex-col justify-center w-full">
				<div class="flex flex-row justify-center px-8">
					<Link document={item.link_src_downloads} activeClass='' classes=" bg-white h2 flex gap-4 bg-white shadow-lg rounded-full px-8 py-4" >
						<Text inline field={item.link_text_downloads} />
						<div>
							>
						</div>
					</Link>
				</div>
			</div>

			<Text plain field={item.text_downloads} classes="p2 pb-4" />
		</div>
	{/each}
</Container>