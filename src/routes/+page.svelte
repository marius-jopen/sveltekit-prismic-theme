<script>
	import Seo from '$lib/components/functionality/seo/index.svelte';

	export let data

	const { document, setup } = data
</script>

<Seo {setup} {document} />