<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/functionality/prismic/client'

    export async function load({ session }) {
        // Get api from client and include the session cookie which is important for the preview mode
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
    import SliderMouseMove from '$lib/modules-flex/sliders/slider-mouse-move/slider-mouse-move.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<SliderMouseMove inputLoop={document.data.slider_mouse_move} />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Slider Mouse Move
    </h3>

    <li>
        Moves images to left or right, depening on the mouse position
    </li>

    <li>
        Horizontal scroll for mobile
    </li>
</div>