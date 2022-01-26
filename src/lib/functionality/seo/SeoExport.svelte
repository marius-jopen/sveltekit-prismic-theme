<script>
    import { page } from '$app/stores'
    import { setupData } from '$lib/functionality/seo/SeoStore.js'

    export let document

    let setup

    setupData.subscribe(value => {
        setup = value
    })
</script>

<svelte:head>
    <title>{document.title[0].text} | {setup.data.website_title[0].text}</title>

   	<meta name="siteUrl" content={$page.host + $page.path} />
    <meta name="pageTitle" content={document.title[0].text + " | " + setup.data.website_title[0].text} />
    <meta name="description" content={setup.data.seo_text[0].text} />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>

    <meta property="og:site_name" content={setup.data.website_title[0].text} />
    <meta property="og:locale" content={setup.lang} />
    <meta property="og:url" content={$page.host + "/" + $page.path} />
    <meta property="og:title" content={document.title[0].text + " | " + setup.data.website_title[0].text} />
    <meta property="og:description" content={setup.data.seo_text[0].text} />

  {#if setup.data.seo_image}
    <meta property="og:image" content={setup.data.seo_image.Small.url} />
    <meta property="og:image:width" content="500px" />
    <meta property="og:image:height" content="500px" />
    <meta property="og:image:alt" content={setup.data.seo_image.alt} />
  {/if}
</svelte:head>