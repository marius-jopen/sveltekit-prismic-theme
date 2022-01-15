<script context="module">
    import Client from '../utils/client'

    export async function load() {
		const setup = await Client.getSingle('setup')

        const pageName = 'home'

        const document = await Client.getSingle(pageName)

        return {
            props: {
                document,
				setup
            }
        }
    }
</script>

<script>
	import NavigationSimpleBar from '$lib/modules/navigations/desktop-simple/desktopSimpleBar.svelte'
	import NavigationMobileSimple from '$lib/modules/navigations/mobile-simple/mobileNav.svelte'

	import HeadlineSimple from '$lib/modules/slices/headlines/headlineSimple.svelte'
	import ImageSimple from "$lib/modules/slices/images/imageSimple.svelte"
	import ParagraphRichtext from "$lib/modules/slices/paragraphs/paragraphRichtext.svelte"

    export let document
	export let setup
</script>

<NavigationSimpleBar data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline="{document.data.title[0].text}" />
<ImageSimple inputImage={document.data.image} />
<ParagraphRichtext inputParagraph={document.data.long_text} />