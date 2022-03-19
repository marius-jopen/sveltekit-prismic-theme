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

<div class="bg-neutral-100 py-2 border-b border-t border-lines">
    Navigations
</div>

<a href="/examples/modules-static/navigations/navigation-desktop-simple" class="block">
    NavigationDesktopSimple
</a>

<a href="/examples/modules-static/navigations/navigation-super-simple" class="block">
    NavigationSuperSimple
</a>

<a href="/examples/modules-static/navigations/navigation-super-simple-fixed" class="block">
    NavigationSuperSimpleFixed
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-content-scroll" class="block">
    NavigationDesktopContentScroll
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-layered-slot" class="block">
    NavigationDesktopLayeredSlot
</a>

<a href="/examples/modules-static/navigations/navigation-desktop-slot" class="block">
    NavigationDesktopSlot
</a>

<a href="/examples/modules-static/navigations/navigation-mobile-simple" class="block">
    NavigationMobileSimple
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines">
    Footers
</div>

<a href="/examples/modules-static/navigations/footer-simple" class="block">
    FooterSimple
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines">
    Repeater
</div>

<a href="/examples/modules-static/repeater/thumbnail-grid" class="block">
    ThumbnailGrid
</a>

<a href="/examples/modules-static/repeater/typo-grid" class="block">
    Typogrid
</a>

<a href="/examples/modules-static/repeater/thumbnail-grid-hover" class="block">
    ThumbnailGridHover
</a>

<a href="/examples/modules-static/repeater/slider-video-fullscreen" class="block">
    SliderVideoFullscreen
</a>

<a href="/examples/modules-static/repeater/overlay" class="block">
    Overlay
</a>

<a href="/examples/modules-static/repeater/accordeon-complex" class="block">
    AccordeonComplex
</a>

<a href="/examples/modules-static/repeater/thumbnail-grid-videos-hover" class="block">
    ThumbnailGridVideosHover
</a>

<div class="bg-neutral-100 py-2 border-b border-t border-lines">
    Layouts
</div>

<a href="/examples/modules-static/layouts/layout-column" class="block">
    LayoutColumn
</a>

<a href="/examples/modules-static/layouts/layout-cover" class="block">
    LayoutCover
</a>

<div class="bg-neutral-200 py-2 border-b border-t border-lines">
    MODULES FLEX
</div>

<div class="bg-neutral-100 py-2 border-b border-t border-lines -mt-0.5">
    Videos
</div>