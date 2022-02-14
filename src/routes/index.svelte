<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '../utils/client'

    export async function load() {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Get data from home page
        const document = await Client.getSingle('home')

        // Return the data which we got above
        return {
            props: {
                document,
				setup
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
	import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/NavigationDesktopSimple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/NavigationMobileSimple.svelte'
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/HeadlineSimple.svelte'
	import ImageFullWidth from '$lib/modules-flex/images/image-full-width/ImageFullWidth.svelte'
	import ParagraphRichtextBig from '$lib/modules-flex/paragraphs/paragraph-richtext-big/ParagraphRichtextBig.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<ImageFullWidth inputImage={document.data.image} />
<ParagraphRichtextBig inputParagraph={document.data.long_text} inputTextAlignment={"ltr"} />