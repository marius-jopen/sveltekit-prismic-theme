<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '$lib/functionality/client/client'

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
	import Seo from '$lib/functionality/seo/seo.svelte'
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<div class="bg-neutral-200 text-center py-2 border-b border-t border-lines">
    MODULES STATIC
</div>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center -mt-0.5">
    Navigations
</div>

<a href="/examples/modules-static/navigations/navigation-desktop-simple" class="block px-4">
    Navigation Desktop Simple
</a>

<a href="/examples/modules-static/navigations/navigation-super-simple" class="block px-4">
    Navigation Super Simple
</a>

<a href="/examples/modules-static/navigations/navigation-super-simple-fixed" class="block px-4">
    Navigation Super Simple Fixed
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-content-scroll" class="block px-4">
    Navigation Desktop Content Scroll
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-layered-slot" class="block px-4">
    Navigation Desktop Layered Slot
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-slot" class="block px-4">
    Navigation Desktop Slot
</a>

<a href="/examples/modules-static/navigations/navigation-mobile-simple" class="block px-4">
    Navigation Mobile Simple
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center">
    Footers
</div>

<a href="/examples/modules-static/navigations/footer-simple" class="block px-4">
    Footer Simple
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center">
    Repeater
</div>

<a href="/examples/modules-static/repeater/thumbnail-grid" class="block px-4">
    Thumbnail Grid
</a>

<a href="/examples/modules-static/repeater/typo-grid" class="block px-4">
    Typo Grid
</a>

<a href="/examples/modules-static/repeater/thumbnail-grid-hover" class="block px-4">
    Thumbnail Grid Hover
</a>

<a href="/examples/modules-static/repeater/slider-video-fullscreen" class="block px-4">
    Slider Video Fullscreen
</a>

<a href="/examples/modules-static/repeater/overlay" class="block px-4">
    Overlay
</a>

<a href="/examples/modules-static/repeater/accordeon-complex" class="block px-4">
    Accordeon Complex
</a>

<a href="/examples/modules-static/repeater/thumbnail-grid-videos-hover" class="block px-4">
    Thumbnail Grid VideosHover
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center">
    Layouts
</div>

<a href="/examples/modules-static/layouts/layout-column" class="block px-4">
    Layout Column
</a>

<a href="/examples/modules-static/layouts/layout-cover" class="block px-4">
    Layout Cover
</a>

<a href="/examples/modules-static/layouts/layout-accordeon" class="block px-4">
    Layout Accordeon
</a>

<div class="bg-neutral-200 text-center py-2 border-b border-t border-lines">
    MODULES FLEX
</div>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center -mt-0.5">
    Videos
</div>

<a href="/examples/modules-flex/videos/video-simple" class="block px-4">
    Video Simple
</a>

<a href="/examples/modules-flex/videos/video-controls" class="block px-4">
    Video Controls
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center -mt-0.5">
    Sliders
</div>

<a href="/examples/modules-flex/sliders/slider-complex" class="block px-4">
    Slider Complex
</a>

<a href="/examples/modules-flex/sliders/slider-marquee" class="block px-4">
    Slider Marquee
</a>

<a href="/examples/modules-flex/sliders/slider-mouse-move" class="block px-4">
    Slider Mouse Move
</a>

<a href="/examples/modules-flex/sliders/slider-fullscreen-image" class="block px-4">
    Slider Fullscreen Image
</a>

<a href="/examples/modules-flex/sliders/slider-video-full-info" class="block px-4">
    Slider Video Full Info
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center -mt-0.5">
    Paragraphs
</div>

<a href="/examples/modules-flex/paragraphs/info-boxes" class="block px-4">
    Info Boxes
</a>

<a href="/examples/modules-flex/paragraphs/paragraph-richtext-big" class="block px-4">
    Paragraph Richtext Big
</a>

<a href="/examples/modules-flex/paragraphs/paragraph-richtext-small" class="block px-4">
    Paragraph Richtext Small
</a>

<a href="/examples/modules-flex/paragraphs/text-image" class="block px-4">
    Text Image
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center -mt-0.5">
    Navigations
</div>

<a href="/examples/modules-flex/navigations/navigation-full-background" class="block px-4">
    Navigation Full Background
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center -mt-0.5">
    Images
</div>

<a href="/examples/modules-flex/images/image-full-screen" class="block px-4">
    Image Full Screen
</a>

<a href="/examples/modules-flex/images/image-full-width" class="block px-4">
    Image Full Width
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center -mt-0.5">
    Headlines
</div>

<a href="/examples/modules-flex/headlines/headline-simple" class="block px-4">
    Headline Simple
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines text-center -mt-0.5">
    Galleries
</div>

<a href="/examples/modules-flex/galleries/gallery-list-hover" class="block px-4">
    Gallery List Hover
</a>

<a href="/examples/modules-flex/galleries/gallery-list-overlay-slider" class="block px-4">
    Gallery List Overlay Slider
</a>