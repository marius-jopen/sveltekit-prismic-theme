<script>
	import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"
	import GalleryFullOverlay from "../gallery-full-overlay/gallery-full-overlay.svelte"

	export let input

	let bind
</script>

<div class="relative cursor-zoom-in">
	{#each input as item, key}
		<div class="relative" on:click={() => bind.openFullscreen(key)}>
			<Text field={item.image_caption_gallery} classes="text-white absolute bottom-3 right-4 z-20 p1 text-xs pointer-events-none" />
			<Image src={item.image_gallery} />
		</div>
	{/each}
</div>

<GalleryFullOverlay {input} bind:this={bind} />