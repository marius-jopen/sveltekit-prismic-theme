<script>
	// Import transition functin from Svelte
	import { slide } from "svelte/transition";

	// Import child components which are used in this slider
    import SliderComplex from '$lib/modules-flex/sliders/slider-complex/slider-complex.svelte'

	// Get data from parent component
    export let item

	// Variables for binding
	export let interalStatus
	export let uid

	// Make those variables reactive
	$: interalStatus
	$: uid

	// Toggle function which gets called on click on headline
	function toggle() {
		if (interalStatus == true) {
			// Close the accordeon
			interalStatus = false

			// Set uid to null because this will tell the parent comp to not do anything
			uid = ""
		} else {
			// Open the accordeon
			interalStatus = true

			// Set the uid to the current open accordeon, becaus it will tell the parent comp
			// that this accordeon is open now. This is used in the parent comp to close all the
			// other accordeons
			uid = item.uid
		}
	}
</script>

{#if item}
	<div transition:slide={{ duration: 300 }}>
		<!-- Header -->
		<div on:click={toggle} id="" class="{item.uid} textHoverGrey cursor-pointer flex text-xl py-3 px-4 w-full border-b border-lines">
			<div class="w-1/2 lg:w-1/3">
				{item.data.title[0].text}
			</div>

			{#if item.data.sub_title[0]}
				<div class="w-1/2 lg:w-1/3">
					{item.data.sub_title[0].text}
				</div>
			{/if}

			<div class="hidden lg:block w-1/3">
				{item.last_publication_date}
			</div>
		</div>

		<!-- Content -->
		{#if interalStatus == true}
			<div class="bg-neutral-100 flex w-full border-b border-lines py-4 pl-4 pr-6" transition:slide={{ duration: 300 }}>
				<!-- Left Side -->
				<div class="w-1/2">
					{item.data.title[0].text}
				</div>

				<!-- Right Side -->
				<div class="w-1/2">
					{#if item.data.slider[0]}
						<SliderComplex inputLoop={item.data.slider} />
					{/if}
					<!-- <img src="{item.data.thumbnail.Big.url}" class="w-1/2 h-30vw object-cover" alt=""> -->
				</div>
			</div>
		{/if}
	</div>
{/if}