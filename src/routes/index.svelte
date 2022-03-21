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

<div class="bg-neutral-200 py-2 border-b border-t border-lines">
    MODULES STATIC
</div>

<div class="bg-neutral-100 py-2 border-b border-t border-lines -mt-0.5">
    Navigations
</div>

<a href="/examples/modules-static/navigations/navigation-desktop-simple" class="block">
    Navigation Desktop Simple
</a>

<a href="/examples/modules-static/navigations/navigation-super-simple" class="block">
    Navigation Super Simple
</a>

<a href="/examples/modules-static/navigations/navigation-super-simple-fixed" class="block">
    Navigation Super Simple Fixed
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-content-scroll" class="block">
    Navigation Desktop Content Scroll
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-layered-slot" class="block">
    Navigation Desktop Layered Slot
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-slot" class="block">
    Navigation Desktop Slot
</a>

<a href="/examples/modules-static/navigations/navigation-mobile-simple" class="block">
    Navigation Mobile Simple
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines">
    Footers
</div>

<a href="/examples/modules-static/navigations/footer-simple" class="block">
    Footer Simple
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines">
    Repeater
</div>

<a href="/examples/modules-static/repeater/thumbnail-grid" class="block">
    Thumbnail Grid
</a>

<a href="/examples/modules-static/repeater/typo-grid" class="block">
    Typo Grid
</a>

<a href="/examples/modules-static/repeater/thumbnail-grid-hover" class="block">
    Thumbnail Grid Hover
</a>

<a href="/examples/modules-static/repeater/slider-video-fullscreen" class="block">
    Slider Video Fullscreen
</a>

<a href="/examples/modules-static/repeater/overlay" class="block">
    Overlay
</a>

<a href="/examples/modules-static/repeater/accordeon-complex" class="block">
    Accordeon Complex
</a>

<a href="/examples/modules-static/repeater/thumbnail-grid-videos-hover" class="block">
    Thumbnail Grid VideosHover
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines">
    Layouts
</div>

<a href="/examples/modules-static/layouts/layout-column" class="block">
    Layout Column
</a>

<a href="/examples/modules-static/layouts/layout-cover" class="block">
    Layout Cover
</a>

<div class="bg-neutral-200 py-2 border-b border-t border-lines">
    MODULES FLEX
</div>

<div class="bg-neutral-100 py-2 border-b border-t border-lines -mt-0.5">
    Videos
</div>

<a href="/examples/modules-flex/videos/video-simple" class="block">
    Video Simple
</a>

<a href="/examples/modules-flex/videos/video-controls" class="block">
    Video Controls
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines -mt-0.5">
    Sliders
</div>

<a href="/examples/modules-flex/sliders/slider-complex" class="block">
    Slider Complex
</a>

<a href="/examples/modules-flex/sliders/slider-marquee" class="block">
    Slider Marquee
</a>

<a href="/examples/modules-flex/sliders/slider-mouse-move" class="block">
    Slider Mouse Move
</a>

<!-- <a href="/examples/modules-flex/sliders/slider-video-full" class="block">
    Slider Video Full
</a>

<a href="/examples/modules-flex/sliders/slider-fullscreen-image" class="block">
    Slider Fullscreen Image
</a>

<a href="/examples/modules-flex/sliders/slider-video-full-info" class="block">
    Slider Video Full Info
</a>
 -->
