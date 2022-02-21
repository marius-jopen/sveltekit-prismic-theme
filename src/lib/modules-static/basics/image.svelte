<script>
    // Get data from parent 
    export let image
    export let imageSize
    export let classes

    // Original
    let imagePath = image.url
    let imageWidth = image.dimensions.width
    let imageHeight = image.dimensions.width

    // Big
    let imageBigPath = image.Big.url
    let imageBigWidth = image.Big.dimensions.width
    let imageBigHeight = image.Big.dimensions.width

    // Medium
    let imageMediumPath = image.Medium.url
    let imageMediumWidth = image.Medium.dimensions.width
    let imageMediumHeight = image.Medium.dimensions.width

    // Small
    let imageSmallPath = image.Small.url
    let imageSmallWidth = image.Small.dimensions.width
    let imageSmallHeight = image.Small.dimensions.width

    // Alt text
    let imageAlt = "image.alt"
</script>

{#if imageSize == 'Original'}
    <img class="{classes}" width="{imageWidth}" height="{imageHeight}" src="{imagePath}" alt="{imageAlt}">
{/if}

{#if imageSize == 'Big'}
    <img class="{classes}" width="{imageBigWidth}" height="{imageBigHeight}" src="{imageBigPath}" alt="{imageAlt}">
{/if}

{#if imageSize == 'Medium'}
    <img class="{classes}" width="{imageMediumWidth}" height="{imageMediumHeight}" src="{imageMediumPath}" alt="{imageAlt}">
{/if}

{#if imageSize == 'Small'}
    <img class="{classes}" width="{imageSmallWidth}" height="{imageSmallHeight}" src="{imageSmallPath}" alt="{imageAlt}">
{/if}