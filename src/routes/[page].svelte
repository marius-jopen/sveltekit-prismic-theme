<script context="module">
    import AllSlices from '$lib/addons/slices/allSlices.svelte'
    import Client from '../utils/client';

    export async function load({ page }) {
        const pageName = page.params.page
        
        const document = await Client.getByUID('page', pageName)
        return {
            props: {
                document,
                pageName
            }
        };
    }
</script>
  
<script>
    export let document
</script>

<AllSlices slices={document.data.body} />