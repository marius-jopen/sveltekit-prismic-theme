<script context="module">
    import Client from '../utils/client'

    export async function load() {
        const document = await Client.getSingle('setup')

        return {
            props: {
                document,
            }
        }
    }
</script>

<script>
	import '../app.postcss'
	import FooterCenter from '$lib/modulesStatic/navigations/footer/FooterSimpleCenter.svelte'
	import { setupData } from '$lib/functionality/seo/SeoStore.js'

	export let document

	setupData.set(document) // Send to global for SEO
</script>

<main>
	<slot />

	<FooterCenter data={document.data} />
</main>