<script>
	import "../app.postcss";
	import Seo from '$lib/components/functionality/seo/index.svelte';
	import NavigationDesktopSimple from '$lib/components/modules/navigations/navigation-desktop-simple/index.svelte';
	import NavigationMobileSimple from '$lib/components/modules/navigations/navigation-mobile-simple/index.svelte';
	import { namespace } from '$lib/services/prismic'; // Import the prismic repo name
	import {
		vw,
		vh,
		y,
		mouseX,
		mouseY,
		progress
	} from "$lib/services/layout"

	const onMouseMove = (e) => {
		mouseX.set(e.clientX)
		mouseY.set(e.clientY)
	}

	const onResize = () => {
		vw.set(window.innerWidth)
		vh.set(window.innerHeight)
	}

	export let data

	const { document, setup } = data
</script>

<svelte:window bind:scrollY="{$y}" on:resize={onResize}></svelte:window>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<svelte:body on:mousemove="{onMouseMove}"></svelte:body>

<Seo {document} {setup} />

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<div class="h-[2000px]">
	<div class="fixed bottom-0">
		{$vw}
		{$y}
		{$progress}
	</div>

	<slot />
</div>