<script context="module">
    import Client from '../utils/client'

    export async function load() {
        const pageName = 'home'

        const document = await Client.getSingle(pageName)

        return {
            props: {
                document
            }
        }
    }
</script>

<script>
	import AllSlices from '$lib/addons/slices/allSlices.svelte'

    export let document
</script>

<div class="text-3xl py-16 border-b border-lines text-center">
    {document.data.title[0].text}
</div>

<AllSlices slices={document.data.body} />