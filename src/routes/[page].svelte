<script context="module">
    import Client from '../utils/client'

    export async function load({ page }) {
        const pageName = page.params.page

        const document = await Client.getByUID('page', pageName)

        return {
            props: {
                document
            }
        }
    }
</script>

<script>
	import AllSlices from '$lib/modules/slices/allSlices.svelte'

    export let document

	console.log(document)
</script>

<AllSlices slices={document.data.body} />