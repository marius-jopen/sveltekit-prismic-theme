<script>
	import * as animateScroll from "svelte-scrollto";

	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple.svelte'
	import ImageFull from "$lib/modulesFlex/images/ImageFull.svelte"
	import ImageSimple from "$lib/modulesFlex/images/ImageSimple.svelte"

	export let input

	let offsetDesktop = 50
	let offsetMobile = 50
	let breakpointMobile = 640
	let borderWidth = 1

	let innerHeight
	let innerWidth
	let offset

	$: offset

	$: if(innerWidth >= breakpointMobile) {
		offset = offsetDesktop
	} else {
		offset = offsetMobile
	}

	function scrollUp() {
		animateScroll.scrollToTop({element: '.content', offset: innerHeight + borderWidth - offset})
	}
</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />

<div class="fixed -z-10">
	<ImageFull inputImage={input.data.thumbnail} />
</div>

<div class="h-screen cursor-pointer" on:click="{scrollUp}">
</div>

<div class="border-lines border-t" style="margin-top: -{offset}px">
	<HeadlineSimple inputHeadline={input.data.title[0].text} />
	<ImageSimple inputImage={input.data.thumbnail} />
	<ImageSimple inputImage={input.data.thumbnail} />
	<ImageSimple inputImage={input.data.thumbnail} />
</div>