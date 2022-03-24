<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/functionality/prismic/client'

    export async function load({ session }) {

    const api = await makeClient(session.cookie)

        // Get data from setup page
		const setup = await api.getSingle('setup')

        // Get data from all-modules page
        const document = await api.getSingle('all_modules')

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
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import TextImage from '$lib/modules-flex/paragraphs/text-image/text-image.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<TextImage 
inputImage={document.data.text_image_image} 
inputImageSize={'Big'}
inputCaption={document.data.text_image_caption} 
inputHasRichtext={true}
inputLayout={document.data.text_image_layout}
inputHeight={document.data.text_image_height}
inputLongText={document.data.text_image_long_text}
/>

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Text Image
    </h3>

    <li>
        Can receive data via parent component or via the Prismic slices module
    </li>

    <li>
        You can set the size of the image to Big, Medium, Small and Original
    </li>

    <li>
        You can chose if the caption which is inserted is a string or a Prismic richtext
    </li>
</div>