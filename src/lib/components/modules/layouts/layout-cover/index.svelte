<script>
	// Import the ScrollTo function from svelte
	import * as animateScroll from "svelte-scrollto";

	// Define variables and some basic settings
	let offsetDesktop = 50 // Height of navigation in px
	let offsetMobile = 50 // Height of mobile navigation in px
	let breakpointMobile = 640  // Breakpoint
	let borderWidth = 1 // If a border is used, the width of the border

	// Define other variables which are needed
	let innerHeight
	let innerWidth
	let offset

	// Make it reactive
	$: offset

	// Reactively check the browser screen width for desktop or mobile mode
	$: if(innerWidth >= breakpointMobile) {
		offset = offsetDesktop
	} else {
		offset = offsetMobile
	}

	// Function to scroll
	function scrollUp() {
		animateScroll.scrollToTop({element: '.content', offset: innerHeight + borderWidth - offset})
	}
</script>

<!-- Get browser width -->
<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />

<!-- Top and fullscreen area -->
<div class="fixed z-0 w-full cursor-pointer h-screen" on:click="{scrollUp}">
	<slot name="fullscreen">
    </slot>
</div>

<!-- Invisible and clickable area which is the full screen -->
<div class="h-screen cursor-pointer" >
</div>

<!-- Border at the bottom, optional -->
<div class="border-lines border-t" style="margin-top: -{offset}px">
</div>

<div class="relative z-10 bg-background border-lines border-b">
	<slot name="content">
    </slot>
</div>