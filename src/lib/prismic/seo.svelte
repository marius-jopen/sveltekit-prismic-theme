<script>
    // Import the function to read the URL
    import { page } from '$app/stores'
    import {
      asText,
      isFilled
    } from '@prismicio/helpers'

    // Get data from setup and current parent page
    export let document
    export let setup
    export let divider = '|'
    export let withTitle = true

    let websiteTitle

    if (isFilled.title(setup.data.seo_title) && withTitle) {
      websiteTitle = asText(setup.data.seo_title)
    } else if (isFilled.title(setup.data.website_title) && withTitle) {
      websiteTitle = asText(setup.data.website_title)
    } else {
      withTitle = false
    }
    
    let language = setup.lang
    let url = $page.url.href

    /** Title */
    let title = isFilled.title(document.data.seo_title) 
      ? asText(document.data.seo_title) + ` ${divider} ${websiteTitle}` : isFilled.title(document.data.title)
        ? asText(document.data.title) + ` ${divider} ${websiteTitle}` : asText(setup.data.seo_title)

    /** Description */
    let description = isFilled.title(document.data.seo_description) 
      ? asText(document.data.seo_description) + ' | ' + asText(setup.data.seo_description) : asText(setup.data.seo_description)

    /** Image */
    let imageUrl = isFilled.image(document.data.seo_image) ? document.data.seo_image.url : setup.data.seo_image.url
    let imageWidth = isFilled.image(document.data.seo_image) ? document.data.seo_image.dimensions.width : 0
    let imageHeight = isFilled.image(document.data.seo_image) ? document.data.seo_image.dimensions.height : 0
    let imageAlt = isFilled.image(document.data.seo_image) ? document.data.seo_image.alt : websiteTitle

  </script>

<svelte:head>
    <html lang={language} />
    <title>{title}</title>

    <meta name="siteUrl" content={url} />
    <meta name="pageTitle" content={title} />
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    
    <meta name=”twitter:card” content=”summary_large_image”>
    <meta name=”twitter:title” content={title}>
    <meta name=”twitter:description” content={description}>
    <meta name=”twitter:image” content={imageUrl}>

    <meta property="og:site_name" content={title} />
    <meta property="og:locale" content={language} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:width" content={imageWidth} />
    <meta property="og:image:height" content={imageHeight} />
    <meta property="og:image:alt" content={imageAlt} /> 
</svelte:head>