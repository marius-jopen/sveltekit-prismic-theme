<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/functionality/prismic/client'

    export async function load({ session }) {
        // Get api from client and include the session cookie which is important for the preview mode
        const api = await makeClient(session.cookie)

        // Get data from setup page
		const setup = await api.getSingle('setup')

        // Get data from home page
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
    import Seo from '$lib/functionality/seo/seo.svelte'
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'
    import ParagraphRichtextBig from '$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte'
    import ParagraphRichtextSmall from '$lib/modules-flex/paragraphs/paragraph-richtext-small/paragraph-richtext-small.svelte'
    import TextImage from '$lib/modules-flex/paragraphs/text-image/text-image.svelte'
    import ImageFullWidth from '$lib/modules-flex/images/image-full-width/image-full-width.svelte'
    import ImageFullScreen from '$lib/modules-flex/images/image-full-screen/image-full-screen.svelte'
    import SliderComplex from '$lib/modules-flex/sliders/slider-complex/slider-complex.svelte'
    import SliderVideoFullInfo from '$lib/modules-flex/sliders/slider-video-full-info/slider-video-full-info.svelte'
    import SliderMarquee from '$lib/modules-flex/sliders/slider-marquee/slider-marquee.svelte'
    import SliderMouseMove from '$lib/modules-flex/sliders/slider-mouse-move/slider-mouse-move.svelte'
	import GalleryListHover from '$lib/modules-flex/galleries/gallery-list-hover/gallery-list-hover.svelte'
    import VideoSimple from '$lib/modules-flex/videos/video-simple/video-simple.svelte'
    import VideoControls from '$lib/modules-flex/videos/video-controls/video-controls.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputText={'Headlines'} />

<HeadlineSimple inputText={document.data.headline_simple_text[0].text} />

<HeadlineSimple inputText={'Paragraphs'} />

<ParagraphRichtextBig inputText={document.data.paragraph_richtext_big_text} />

<ParagraphRichtextSmall inputText={document.data.paragraph_richtext_small_text} />

<TextImage 
inputImage={document.data.text_image_image} 
inputImageSize={'Big'}
inputCaption={document.data.text_image_caption} 
inputHasRichtext={true}
inputLayout={document.data.text_image_layout}
inputHeight={document.data.text_image_height}
inputLongText={document.data.text_image_long_text}
/>

<HeadlineSimple inputText={'Images'} />

<ImageFullWidth 
inputImage={document.data.image_full_width_image} 
inputImageSize={'Big'}
inputCaption={document.data.image_full_width_caption} 
inputHasRichtext={true}
/>

<ImageFullScreen 
inputImage={document.data.image_full_screen_image} 
inputImageSize={'Big'}
inputCaption={document.data.image_full_screen_caption} 
inputHasRichtext={true}
/>

<HeadlineSimple inputText={'Slider'} />

<SliderComplex inputLoop={document.data.slider_complex} height="h-50vw sm:h-60vw" classes="" />

<SliderVideoFullInfo inputLoop={document.data.slider_video_full_info} />

<SliderMarquee inputText={document.data.slider_marquee_text[0].text} inputDirection={document.data.slider_marquee_direction} />

<SliderMouseMove inputLoop={document.data.slider_mouse_move} />

<HeadlineSimple inputText={'Galleries'} />

<GalleryListHover 
inputLoop={document.data.gallery_list_hover} 
inputBackgroundColor={document.data.gallery_list_hover_backgroundcolor} 
/>

<HeadlineSimple inputText={'Videos'} />

<VideoSimple inputVideoUrl={document.data.video_simple_vimeo[0].text} inputVideoPoster={document.data.video_simple_poster.Big.url} />

<VideoControls inputVideoUrl="{document.data.video_controls_vimeo[0].text}" inputVideoPoster="{document.data.video_controls_poster.Big.url}" inputHeight="h-40vw" inputSliderClicked={false} inputIndex="{0}" inputSlideIndex="{0}" />