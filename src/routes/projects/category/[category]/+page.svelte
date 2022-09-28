<script>
	import Seo from '$lib/components/functionality/seo/seo.svelte';

	export let setup
	export let document
</script>

<Seo setup={setup.data} document={document.data} />
