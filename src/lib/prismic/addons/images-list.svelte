<script>
	import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"
	import ImageListFullscreen from "./images-fullscreen.svelte"

	export let imageList

	let bind
</script>

<div class="relative cursor-zoom-in">
	{#each imageList as item, key}
		<div class="relative" on:click={() => bind.openFullscreen(key)}>
			<Text field={item.image_caption_images} classes="text-white absolute bottom-3 right-4 z-20 uppercase tracking-widest text-xs pointer-events-none" />
			<Image src={item.image_images} />
		</div>
	{/each}
</div>

<ImageListFullscreen {imageList} bind:this={bind} />