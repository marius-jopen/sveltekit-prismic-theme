<script>
	import ProjectItem from "./project-item.svelte"

	export let document
</script>

<div class="sm:flex flex-wrap">
	{#each document.data.items as item}
		<ProjectItem item={item.item} />
	{/each}
</div>