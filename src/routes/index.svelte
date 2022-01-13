<script context="module">
    import Client from '../utils/client'

    export async function load() {
        const pageName = 'home'

        const document = await Client.getSingle(pageName)

        return {
            props: {
                document
            }
        }
    }
</script>

<script>
	import HeadlineSimple from '$lib/addons/slices/headlines/headlineSimple.svelte'
	import ImageSimple from "$lib/addons/slices/images/imageSimple.svelte"
	import ParagraphRichtext from "$lib/addons/slices/paragraphs/paragraphRichtext.svelte"

    export let document
	console.log(document)
</script>

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<ImageSimple inputImage={document.data.image} />
<ParagraphRichtext inputParagraph={document.data.long_text} />