<!-- <script context="module">
    import Client from '../utils/client'

    export async function load() {
        const document = await Client.getSingle('setup')

        return {
            props: {
                document,
            }
        }
    }
</script> -->

<script>
	import '../app.postcss'
</script>

<main>
	<slot />
</main>