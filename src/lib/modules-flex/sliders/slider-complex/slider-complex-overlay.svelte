<script>
    // Get data from parent Component
    export let loop
</script>

<div class="bg-red-100 w-full overflow-y-scroll h-screen">
    {#each loop as item}
        <img src="{item.slider_image.Big.url}" alt="{item.slider_image.alt}" class="">
    {/each}
</div>