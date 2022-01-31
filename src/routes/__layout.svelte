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

	export let setup

	console.log(setup)
</script>

<main>
	<slot />
</main>