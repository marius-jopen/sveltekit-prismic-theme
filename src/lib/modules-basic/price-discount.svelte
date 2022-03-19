<!-- Price are, includes discout and sold out notice -->
{#if item.data.price[0]}
<div class="absolute top-3 sm:top-auto sm:bottom-3 right-4 z-10 text-right uppercase tracking-widest text-xs pointer-events-none	">
    {#if item.data.sold_out}
        Sold Out
    {:else}
        {#if item.data.discount[0]}
            $<span class="line-through">{item.data.price[0].text}</span> ${item.data.discount[0].text}
        {:else}
            ${item.data.price[0].text}
        {/if}
    {/if}
</div>
{/if}