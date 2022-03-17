<script>
    // Get data from parent 
    export let image
    export let imageSize
    export let classes
    export let style

    let imagePath
    let imageWidth
    let imageHeight
    let imageBigPath
    let imageBigWidth
    let imageBigHeight
    let imageMediumPath
    let imageMediumWidth
    let imageMediumHeight
    let imageSmallPath
    let imageSmallWidth
    let imageSmallHeight
    let imageAlt

    if(image.url) {
        // Original
        imagePath = image.url
        imageWidth = image.dimensions.width
        imageHeight = image.dimensions.width

        // Big
        imageBigPath = image.Big.url
        imageBigWidth = image.Big.dimensions.width
        imageBigHeight = image.Big.dimensions.width

        // Medium
        imageMediumPath = image.Medium.url
        imageMediumWidth = image.Medium.dimensions.width
        imageMediumHeight = image.Medium.dimensions.width

        // Small
        imageSmallPath = image.Small.url
        imageSmallWidth = image.Small.dimensions.width
        imageSmallHeight = image.Small.dimensions.width

        // Alt text
        imageAlt = "image.alt"
    }
</script>

{#if imagePath}
    {#if imageSize == 'Original'}
        <img style="{style}" class="{classes}" width="{imageWidth}" height="{imageHeight}" src="{imagePath}" alt="{imageAlt}">
    {/if}

    {#if imageSize == 'Big'}
        <img style="{style}" class="{classes}" width="{imageBigWidth}" height="{imageBigHeight}" src="{imageBigPath}" alt="{imageAlt}">
    {/if}

    {#if imageSize == 'Medium'}
        <img style="{style}" class="{classes}" width="{imageMediumWidth}" height="{imageMediumHeight}" src="{imageMediumPath}" alt="{imageAlt}">
    {/if}

    {#if imageSize == 'Small'}
        <img style="{style}" class="{classes}" width="{imageSmallWidth}" height="{imageSmallHeight}" src="{imageSmallPath}" alt="{imageAlt}">
    {/if}
{/if}