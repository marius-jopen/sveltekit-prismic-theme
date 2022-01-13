<script context="module">
    import Client from '../../utils/client'
    import Prismic from "@prismicio/client"

    export async function load({ page }) {
        const pageName = page.params.project

        const document = await Client.getByUID('project', pageName)

        const allProjects = await Client.query(
            Prismic.Predicates.at("document.type", "project"),
        )

        return {
            props: {
                document,
                pageName,
                allProjects,
            }
        }
    }
</script>

<script>
	import AllSlices from '$lib/addons/slices/allSlices.svelte'
	import Lazy from '$lib/addons/lazyload/lazy.svelte';

    export let document
</script>

<div class="text-3xl py-16 border-b border-lines text-center">
    {document.data.title[0].text}
</div>

<Lazy height={500} offset={200} fadeOption={{delay: 100, duration: 500}}>
    <img src="{document.data.thumbnail.Small.url}" class="w-full border-b border-lines" alt="">
</Lazy>

<AllSlices slices="{document.data.body}" />