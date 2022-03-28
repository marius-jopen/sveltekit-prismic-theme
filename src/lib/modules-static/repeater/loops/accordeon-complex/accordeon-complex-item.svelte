<script>
	// Import transition functin from Svelte
	import { slide } from "svelte/transition";

	// Import child components which are used in this slider
    import AccordeonComplexItemContent from '$lib/modules-static/repeater/loops/accordeon-complex/accordeon-complex-item-content.svelte'

	// Get data from parent component
    export let item

	// Variables for binding
	export let interalStatus
	export let uid

	// Calls the functions which shortens the title if needed
	let titleShort

	// Make those variables reactive
	$: interalStatus
	$: uid
	$: titleShort = truncateString(item.data.title[0].text, 35);

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

	// Function which shortens the title
	function truncateString(str, num) {
		// If the length of str is less than or equal to num
		// just return str--don't truncate it.
		if (str.length <= num) {
			return str
		}
		// Return str truncated with '...' concatenated to the end of str.
		return str.slice(0, num) + '...'
	}
</script>

{#if item}
	<div transition:slide={{ duration: 300 }}>
		<!-- Header -->
		<div on:click={toggle} class="{item.uid} w-full flex cursor-pointer textHoverGrey text-xl py-3 px-4 border-b border-lines">
			{#if interalStatus == false || interalStatus == undefined}
				<div class="w-1/2 lg:w-1/3">
					{titleShort}
				</div>

				{#if item.data.sub_title[0]}
					<div class="w-1/2 lg:w-1/3">
						{item.data.sub_title[0].text}
					</div>
				{/if}

				<div class="hidden lg:block w-1/3">
					{item.last_publication_date}
				</div>
			{:else}
				<div class="w-full">
					{item.data.title[0].text}
				</div>

				<div class="pr-2 flex justify-center flex-col">
					<svg id="Ebene_1" class="h-5" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
						<defs><style>.cls-1{fill:none;stroke:black;stroke-miterlimit:10;stroke-width:2px;}</style></defs><line class="cls-1" x1="1.91" y1="1.91" x2="23.09" y2="23.09"/><line class="cls-1" x1="1.91" y1="23.09" x2="23.09" y2="1.91"/>
					</svg>
				</div>
			{/if}
		</div>

		<!-- Content -->
		{#if interalStatus == true}
			<div class="bg-neutral-100 w-full border-b border-lines py-4 pl-4 pr-6" transition:slide={{ duration: 300 }}>
				<AccordeonComplexItemContent item={item} />
			</div>
		{/if}
	</div>
{/if}