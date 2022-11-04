<script>
	import ProjectItem from "./project-item.svelte"

	export let items
</script>

<div class="sm:flex flex-wrap">
	{#each items as item (item.item.uid)}
		<ProjectItem item={item.item} />
	{/each}
</div>