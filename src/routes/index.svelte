<script context="module">
    import Client from '../utils/client'

    export async function load() {
		const setup = await Client.getSingle('setup')

        const document = await Client.getSingle('home')

        return {
            props: {
                document,
				setup
            }
        }
    }
</script>

<script>
	import NavigationDesktopSimple from '$lib/modulesStatic/navigations/desktop/NavigationDesktopSimple.svelte'
	import NavigationMobileSimple from '$lib/modulesStatic/navigations/mobile/NavigationMobileSimple.svelte'
	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple.svelte'
	import ImageSimple from '$lib/modulesFlex/images/ImageSimple.svelte'
	import ParagraphRichtext from '$lib/modulesFlex/paragraphs/ParagraphRichtext.svelte'

    export let document
	export let setup

	console.log(document)
	console.log(setup)
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<ImageSimple inputImage={document.data.image} />
<ParagraphRichtext inputParagraph={document.data.long_text} inputTextAlignment={"ltr"} />