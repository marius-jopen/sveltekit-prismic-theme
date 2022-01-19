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
	import Footer from '$lib/modulesStatic/navigations/footer/FooterSimple.svelte'
	import { setupData } from '$lib/functionality/seo/SeoStore.js'

	export let document

	setupData.set(document) // Send to global for SEO
</script>

<main>
	<slot />

	<Footer data={document.data} />
</main>