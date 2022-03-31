<script>
    // Import props from parent comp
    export let input
    export let classes
</script>

{#if input.price[0]}
    <div class="{classes}">
        {#if input.sold_out == true}
            Sold Out
        {:else}
            {#if input.discount[0]}
                <span class="line-through">
                    ${input.price[0].text}
                </span> 
                
                ${input.discount[0].text}
            {:else}
                ${input.price[0].text}
            {/if}
        {/if}
    </div>
{/if}