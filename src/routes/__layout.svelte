<script context="module">
    import Client from '../utils/client'

    export async function load() {
        const setup = await Client.getSingle('setup')

        return {
            props: {
                setup,
            }
        }
    }
</script>

<script>
	import '../app.postcss'

    import FooterSimple from '$lib/modulesStatic/navigations/FooterSimple/FooterSimple.svelte'

	export let setup
</script>

<main>
	<slot />

    <FooterSimple data={setup.data} />
</main>