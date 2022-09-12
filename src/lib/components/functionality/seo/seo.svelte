<script>
    // Import the function to read the URL
    import { page } from '$app/stores'

    // Get data from setup and current parent page
    export let document
    export let setup
    
    // Define used variables
    let language = setup.seo_language[0].text
    let url = $page.url.href
    let title = (document.seo_title[0] ? (document.seo_title[0].text + ' | ' + setup.seo_title[0].text) : setup.seo_title[0].text)
    let description = (document.seo_description[0] ? document.seo_description[0].text : setup.seo_description[0].text)
    let imageUrl = (document.seo_image.url ? document.seo_image.url : setup.seo_image.url)
    let imageWidth = (document.seo_image.url ? document.seo_image.dimensions.width : setup.seo_image.dimensions.width)
    let imageHeight = (document.seo_image.url ? document.seo_image.dimensions.height : setup.seo_image.dimensions.height)
    let imageAlt = (document.seo_image.url ? document.seo_image.alt : setup.seo_image.alt)
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