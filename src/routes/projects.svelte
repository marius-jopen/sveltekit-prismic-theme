<script context="module">
    import FilterProjects from '$lib/projects/filterProjects.svelte'
    import ProjectLoop from '$lib/projects/projectLoop.svelte'
    import Prismic from "@prismicio/client";
    import Client from '../utils/client';

    export async function load({ page }) {
        const pageName = page.path.replace('/', '')

        const document = await Client.getSingle(pageName)

        const allProjects = await Client.query(
            Prismic.Predicates.at("document.type", "project"),
        )

        const sortedProjects = document.data.project_order.map(i => {
			const uid = i.selected_project.uid
            return allProjects.results.find(p => p.uid === uid)
        })

        return {
            props: {
				sortedProjects,
                document,
                allProjects,
                pageName
            }
        };
    }
</script>

<script>
    export let document
    export let allProjects
    export let sortedProjects
</script>

<div class="text-3xl py-16 border-b border-lines text-center">
    {document.data.title[0].text}
</div>

<FilterProjects projects={allProjects.results} />
<ProjectLoop projects={sortedProjects} />