<script>
	export let setup
</script>

<div>
	{#each setup.data.navigation_header as item }
		<a href="{item.link.slug}">
			{item.link.slug}
		</a>
	{/each}
</div>