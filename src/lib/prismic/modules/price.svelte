<script>
	export let item
	export let classes = ""
</script>

<div class="{classes}">
	<div>
		{#if item.data.price}
			{#if item.data.sold_out == true}
				<div>
					Sold Out
				</div>
			{:else}
				{#if item.data.discount}
				<div>
					<span class="line-through">
						${item.data.price}
					</span>

					${item.data.discount}
				</div>
				{:else}
					<div>
						${item.data.price}
					</div>
				{/if}
			{/if}
		{/if}
	</div>

	<div>
		{#if item.data.few_pieces_left}
			<div>
				Few Pieces Left
			</div>
		{/if}

		{#if item.data.on_sale}
			<div>
				On Sale
			</div>
		{/if}
	</div>
</div>