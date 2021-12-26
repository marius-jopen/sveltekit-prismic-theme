<script>
    import ProjectItem from '$lib/projects/projectItem.svelte'
    export let projects
</script>

<div class="flex flex-wrap">
    {#each projects as project}
        <ProjectItem project={project} />
    {/each}
</div>