<script>
	import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"
	import { Body } from 'svelte-body';

	export let imageList

	let keyCode
	let fullscreen = false
	let locked = ""

	// Function which opens the fullscreen and locks the body
	// Can be called from outside
	export function openFullscreen() {
		fullscreen = true
		locked = "overflow-y-hidden"
	}

	// Function which gets called on keystroke and if it is the ECS key
	// close the fullscreen
	function handleKeydown(event) {
		if(keyCode = 27) {
			fullscreen = false
			locked = ""
		}
	}

	// Function which closes the fullscreen and unlocks the body
	function closeFullscreen() {
		fullscreen = false
		locked = ""
	}
</script>

<Body class="{locked}" />

<svelte:window on:keydown={handleKeydown}/>

{#if fullscreen}
	<div class="fixed w-full h-screen bg-background z-50 top-0 left-0" >
		<div class="text-white text-xs tracking-wider fixed top-1.5 uppercase left-3 pt-2 pr-4 cursor-pointer z-50" on:click="{closeFullscreen}">
			Close
		</div>

		<div class="overflow-y-scroll h-screen cursor-zoom-out" on:click="{closeFullscreen}">
			{#each imageList as item}
				<div class="relative">
					<Text field={item.image_caption_images} classes="text-white absolute bottom-3 right-4 z-20 uppercase tracking-widest text-xs pointer-events-none" />
					<Image src={item.image_images} />
				</div>
			{/each}
		</div>
	</div>
{/if}