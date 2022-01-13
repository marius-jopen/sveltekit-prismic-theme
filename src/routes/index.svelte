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
	import HeadlineSimple from '$lib/modules/slices/headlines/headlineSimple.svelte'
	import ImageSimple from "$lib/modules/slices/images/imageSimple.svelte"
	import ParagraphRichtext from "$lib/modules/slices/paragraphs/paragraphRichtext.svelte"

    export let document
</script>

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<ImageSimple inputImage={document.data.image} />
<ParagraphRichtext inputParagraph={document.data.long_text} />