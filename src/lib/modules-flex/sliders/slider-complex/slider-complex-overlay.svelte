<script>
    // Get data from parent Component
    export let loop
</script>

<div class="w-screen overflow-y-scroll h-screen pt-4 pb-10">
    {#each loop as item}
        <div class="pt-10 px-12">
            <img src="{item.slider_image.Big.url}" alt="{item.slider_image.alt}">

            {#if item.caption[0]}
                <div class="pt-1">
                    {item.caption[0].text}
                </div>
            {/if}
        </div>
    {/each}
</div>