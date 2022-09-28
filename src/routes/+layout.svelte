<script>
	import "../app.postcss";
	import { namespace } from '$lib/utilities/prismic'; // Import the prismic repo name
	import {
		vw,
		vh,
		y,
		mouseX,
		mouseY,
		progress
	} from "$lib/utilities/layout"

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

<ToolSeo {document} {setup} />

<RootHeader />

<div class="h-[2000px]">
  <div class="fixed bottom-0">
    {$vw}
		{$y}
		{$progress}
	</div>
  
	<slot />
</div>

<RootFooter />