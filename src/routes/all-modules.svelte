<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '../utils/client'

    export async function load() {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Get data from home page
        const document = await Client.getSingle('all_modules')

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
    import Seo from '$lib/functionality/seo/seo.svelte'
	import NavigationDesktopLayered from '$lib/modules-static/navigations/navigation-desktop-layered/navigation-desktop-layered.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
	import ImageFullWidth from '$lib/modules-flex/images/image-full-width/image-full-width.svelte'
    import ImageFullScreen from '$lib/modules-flex/images/image-full-screen/image-full-screen.svelte'
    import TextImage from '$lib/modules-flex/paragraphs/text-image/text-image.svelte'
	import ParagraphRichtextBig from "$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte"
	import HeadlineSimple from "$lib/modules-flex/headlines/headline-simple/headline-simple.svelte"
    import SliderComplex from '$lib/modules-flex/sliders/slider-complex/slider-complex.svelte'
    import SliderVideoFull from '$lib/modules-flex/sliders/slider-video-full/slider-video-full.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopLayered data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<ImageFullWidth 
inputImage={document.data.image_full_width_image} 
inputImageSize={'Big'}
inputCaption={document.data.image_full_width_caption} 
inputHasRichtext={true} 
/>

<ImageFullScreen 
inputImage={document.data.image_full_width_image} 
inputImageSize={'Big'}
inputCaption={document.data.image_full_screen_caption[0].text} 
inputHasRichtext={false}
/>

<ParagraphRichtextBig 
inputLongText={document.data.paragraph_richtext_big_long_text}
/>

<HeadlineSimple 
inputText={document.data.headline_simple_text[0].text}
/>

<SliderComplex 
inputLoop={document.data.slider} 
height="h-50vw sm:h-60vw" 
classes="" 
/>

<SliderVideoFull 
inputLoop={document.data.slider} 
/>

<TextImage 
inputImage={document.data.text_image_image} 
inputImageSize={'Big'}
inputCaption={document.data.text_image_caption} 
inputHasRichtext={true}
inputLayout={document.data.text_image_layout}
inputHeight={true}
inputLongText={document.data.text_image_long_text}
/>