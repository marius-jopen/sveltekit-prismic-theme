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
	import Footer from '$lib/modules/navigations/footer-simple/footerSimple.svelte'

	export let document
</script>

<main>
	<slot />

	<Footer data={document.data} />
</main>