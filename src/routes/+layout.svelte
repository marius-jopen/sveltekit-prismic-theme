<script>
	import { namespace } from '$lib/prismic/functionality/setup'
	import { vh, glossaryAll } from '$lib/prismic/functionality/stores'

	// import Layout from "$lib/prismic/layout/layout.svelte"
	// import Layout1 from "$lib/prismic/layout/layout-1.svelte"
	import Layout2 from "$lib/prismic/layout/layout-2.svelte"

	export let data

	const { glossary } = data
	let innerHeight = ''

	$: vh.set(innerHeight)
	$: glossaryAll.set(glossary)
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<svelte:window bind:innerHeight />

<Layout2 {data}>
	<slot />
</Layout2>