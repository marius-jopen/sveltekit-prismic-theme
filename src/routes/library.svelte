<script context="module">
	// Import functions which are needed to get data from the CMS
	import makeClient from '$lib/functionality/prismic/client';

	export async function load({ session }) {
		// Get api from client and include the session cookie which is important for the preview mode
		const api = await makeClient(session.cookie);
		
		// Get data from setup page
		const setup = await api.getSingle('setup');

		// Set document to setup to avoid empty document array for SEO
		const document = setup

		// Return the data which we got above
		return {
			props: {
				document,
				setup
			}
		};
	}
</script>

<script>
	// Import all components which will be used on this page
	import Seo from '$lib/functionality/seo/seo.svelte';
	import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte';
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte';
	import LayoutAccordeon from '$lib/modules-static/layouts/layout-accordeon/layout-accordeon.svelte'
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'

	// Get the data from above
	export let document;
	export let setup;
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputClasses={""} inputText={"Modules Static"} />

<LayoutAccordeon inputHeadline={"Navigations"}>
	<a href="/examples/modules-static/navigations/navigation-desktop-simple" class="block py-0.5 textHoverGrey">
		Navigation Desktop Simple
	</a>
	
	<a href="/examples/modules-static/navigations/navigation-super-simple" class="block py-0.5 textHoverGrey">
		Navigation Super Simple
	</a>
	
	<a href="/examples/modules-static/navigations/navigation-super-simple-fixed" class="block py-0.5 textHoverGrey">
		Navigation Super Simple Fixed
	</a>
	
	<a href="/examples/modules-static/navigations/navigation-desktop-content-scroll" class="block py-0.5 textHoverGrey">
		Navigation Desktop Content Scroll
	</a>
	
	<a href="/examples/modules-static/navigations/navigation-desktop-layered-slot" class="block py-0.5 textHoverGrey">
		Navigation Desktop Layered Slot
	</a>
	
	<a href="/examples/modules-static/navigations/navigation-desktop-slot" class="block py-0.5 textHoverGrey">
		Navigation Desktop Slot
	</a>
	
	<a href="/examples/modules-static/navigations/navigation-mobile-simple" class="block py-0.5 textHoverGrey">
		Navigation Mobile Simple
	</a>
</LayoutAccordeon> 

<LayoutAccordeon inputHeadline={"Footers"}>
	<a href="/examples/modules-static/navigations/footer-simple" class="block py-0.5 textHoverGrey">
		Footer Simple
	</a>

	<a href="/examples/modules-static/navigations/footer-stretched" class="block py-0.5 textHoverGrey">
		Footer Stretched
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Repeater"}>
	<a href="/examples/modules-static/repeater/thumbnail-grid" class="block py-0.5 textHoverGrey">
		Thumbnail Grid
	</a>

	<a href="/examples/modules-static/repeater/big-image-list" class="block py-0.5 textHoverGrey">
		Big Image List
	</a>

	<a href="/examples/modules-static/repeater/typo-grid" class="block py-0.5 textHoverGrey"> 
		Typo Grid 
	</a>

	<a href="/examples/modules-static/repeater/thumbnail-grid-hover" class="block py-0.5 textHoverGrey">
		Thumbnail Grid Hover
	</a>

	<a href="/examples/modules-static/repeater/slider-video-fullscreen" class="block py-0.5 textHoverGrey">
		Slider Video Fullscreen
	</a>

	<a href="/examples/modules-static/repeater/overlay" class="block py-0.5 textHoverGrey"> 
		Overlay 
	</a>

	<a href="/examples/modules-static/repeater/accordeon-complex" class="block py-0.5 textHoverGrey">
		Accordeon Complex
	</a>

	<a href="/examples/modules-static/repeater/thumbnail-grid-videos-hover" class="block py-0.5 textHoverGrey">
		Thumbnail Grid VideosHover
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Filter"}>
	<a href="/examples/modules-static/filter/filter-items-full" class="block py-0.5 textHoverGrey">
		Filter Items Full
	</a>

	<a href="/examples/modules-static/filter/filter-items-horizontal" class="block py-0.5 textHoverGrey">
		Filter Items Horizontal
	</a>

	<a href="/examples/modules-static/filter/filter-items-top" class="block py-0.5 textHoverGrey">
		Filter Items Top
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Layouts"}>
	<a href="/examples/modules-static/layouts/layout-tabs" class="block py-0.5 textHoverGrey"> 
		Layout Tabs 
	</a>

	<a href="/examples/modules-static/layouts/layout-column" class="block py-0.5 textHoverGrey"> 
		Layout Column 
	</a>

	<a href="/examples/modules-static/layouts/layout-cover" class="block py-0.5 textHoverGrey"> 
		Layout Cover 
	</a>

	<a href="/examples/modules-static/layouts/layout-accordeon" class="block py-0.5 textHoverGrey">
		Layout Accordeon
	</a>
</LayoutAccordeon>

<HeadlineSimple inputClasses={""} inputText={"Modules Flex"} />

<LayoutAccordeon inputHeadline={"Videos"}>
	<a href="/examples/modules-flex/videos/video-simple" class="block py-0.5 textHoverGrey"> 
		Video Simple 
	</a>

	<a href="/examples/modules-flex/videos/video-controls" class="block py-0.5 textHoverGrey"> 
		Video Controls 
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Sliders"}>
	<a href="/examples/modules-flex/sliders/slider-complex" class="block py-0.5 textHoverGrey"> 
		Slider Complex
	</a>

	<a href="/examples/modules-flex/sliders/slider-mouse-move" class="block py-0.5 textHoverGrey">
		Slider Mouse Move
	</a>

	<a href="/examples/modules-flex/sliders/slider-fullscreen-image" class="block py-0.5 textHoverGrey">
		Slider Fullscreen Image
	</a>

	<a href="/examples/modules-flex/sliders/slider-video-full-info" class="block py-0.5 textHoverGrey">
		Slider Video Full Info
	</a>

	<a href="/examples/modules-flex/sliders/slider-marquee" class="block py-0.5 textHoverGrey"> 
		Slider Marquee
	</a>

	<a href="/examples/modules-flex/sliders/slider-complex-vertical" class="block py-0.5 textHoverGrey"> 
		Slider Complex Vertical
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Paragraphs"}>
	<a href="/examples/modules-flex/paragraphs/repeating-content" class="block py-0.5 textHoverGrey">
		Repeating Content
	</a>

	<a href="/examples/modules-flex/paragraphs/info-boxes" class="block py-0.5 textHoverGrey"> Info Boxes </a>

	<a href="/examples/modules-flex/paragraphs/paragraph-richtext-big" class="block py-0.5 textHoverGrey">
		Paragraph Richtext Big
	</a>

	<a href="/examples/modules-flex/paragraphs/paragraph-richtext-small" class="block py-0.5 textHoverGrey">
		Paragraph Richtext Small
	</a>

	<a href="/examples/modules-flex/paragraphs/text-image" class="block py-0.5 textHoverGrey"> 
		Text Image 
	</a>

	<a href="/examples/modules-flex/tables/table-basic" class="block py-0.5 textHoverGrey"> 
		Table Basic 
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Navigations"}>
	<a href="/examples/modules-flex/navigations/navigation-full-background" class="block py-0.5 textHoverGrey">
		Navigation Full Background
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Images"}>
	<a href="/examples/modules-flex/images/image-full-screen" class="block py-0.5 textHoverGrey"> 
		Image Full Screen 
	</a>

	<a href="/examples/modules-flex/images/image-full-width" class="block py-0.5 textHoverGrey"> 
		Image Full Width 
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Headlines"}>
	<a href="/examples/modules-flex/headlines/headline-simple" class="block py-0.5 textHoverGrey"> 
		Headline Simple 
	</a>
</LayoutAccordeon>

<LayoutAccordeon inputHeadline={"Galleries"}>
	<a href="/examples/modules-flex/galleries/gallery-list-hover" class="block py-0.5 textHoverGrey">
		Gallery List Hover
	</a>

	<a href="/examples/modules-flex/galleries/gallery-list-overlay-slider" class="block py-0.5 textHoverGrey">
		Gallery List Overlay Slider
	</a>
</LayoutAccordeon>