<script>
	import { page } from '$app/stores'
	import { asText, isFilled } from '@prismicio/helpers'

	export let setup
	export let document
	export let divider = '|'
	export let withTitle = true

	let websiteTitle

	if (setup.data.seo_title && withTitle) {
		websiteTitle = setup.data.seo_title
	} else if (setup.data.website_title && withTitle) {
		websiteTitle = setup.data.website_title
	} else {
		withTitle = false
	}

	let language = setup.seo_language
	let url = $page.url.href

	let title = asText(document.data.seo_title)
		? asText(document.data.seo_title) + ` ${divider} ${asText(websiteTitle)}` : asText(document.data.title)
			? asText(document.data.title) + ` ${divider} ${asText(websiteTitle)}` : asText(setup.data.seo_title)

	let description = asText(document.data.seo_description)
		? asText(setup.data.seo_description) : asText(setup.data.seo_description)

	let imageUrl = isFilled.image(document.data.seo_image) ? document.data.seo_image.url + '&fm=webp&lossless=true' : setup.data.seo_image.url + '&fm=webp&lossless=true'
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