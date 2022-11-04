<script>
	import ProjectItem1 from "$lib/prismic/modules-extended/project-item-1.svelte"

	export let items
</script>

<div class="sm:flex flex-wrap">
	{#each items as item (item.item.uid)}
		<ProjectItem1 item={item.item} />
	{/each}
</div>