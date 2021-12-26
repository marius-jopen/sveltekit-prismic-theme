<script context="module">
    import FilterProjects from '$lib/projects/filterProjects.svelte'
    import ProjectLoop from '$lib/projects/projectLoop.svelte'
    import Prismic from "@prismicio/client";
    import Client from '../../../utils/client';

    export async function load({ page }) {
        const tagName = page.params.category.replace("-", ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

        const filteredProjects = await Client.query(
            Prismic.Predicates.at("document.tags", [tagName])
        )

        const allProjects = await Client.query(
            Prismic.Predicates.at("document.type", "project"),
        )

        return {
            props: {
                filteredProjects,
                allProjects,
                tagName
            }
        }
    }
</script>

<script>
    export let filteredProjects
    export let tagName
    export let allProjects
</script>


<div class="text-3xl py-16 border-b border-lines text-center">
    {tagName}
</div>

<FilterProjects projects={allProjects.results} />
<ProjectLoop projects={filteredProjects.results} />