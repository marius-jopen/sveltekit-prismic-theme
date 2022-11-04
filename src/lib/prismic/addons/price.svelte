<script>
	export let item
</script>

{#if item.data.price}
	{#if item.data.sold_out == true}
		Sold Out
	{:else}
		{#if item.data.discount}
			<span class="line-through">
				${item.data.price}
			</span>

			${item.data.discount}
		{:else}
			${item.data.price}
		{/if}
	{/if}
{/if}