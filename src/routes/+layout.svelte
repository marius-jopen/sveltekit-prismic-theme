<script>
	import "../app.postcss"

	import Seo from "$lib/prismic/seo.svelte"
	import Header from "$lib/modules/header.svelte"
	import Footer from "$lib/modules/footer.svelte"

	import { namespace } from '$lib/prismic/setup/index' // Import the prismic repo name
	import {vw, vh, y, mouseX, mouseY, progress } from "$lib/tools/layout"

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

<Header />

<div>
	<slot />
</div>

<Footer />