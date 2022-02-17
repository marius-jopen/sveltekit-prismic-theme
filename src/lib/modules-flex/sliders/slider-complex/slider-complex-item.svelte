<script>
    // Get data from parent Component
    export let item

    // Shared height
    let height = "h-50vw sm:h-30vw"
</script>

<div class="{height}">
    <img src="{item.slider_image.Big.url}" alt="{item.slider_image.alt}" class="{height} w-full object-cover">
</div>