<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/components/functionality/prismic/client'

    export async function load({ session }) {
        // Get api from client and include the session cookie which is important for the preview mode
        const api = await makeClient(session.cookie)

        // Get data from setup page
		const setup = await api.getSingle('setup')

        // Return the data which we got above
        return {
            props: {
				setup
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
	import LayoutCover from '$lib/modules-static/layouts/layout-cover/layout-cover.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<LayoutCover>
    <span slot="fullscreen">
        Scroll down or click!
    </span>

    <span slot="content">
        <div class="border-b border-lines px-3 py-3 text-lg">
            <h3>
                Layout Cover
            </h3>
        
            <li>
                Area for a fullscreen image / video or any kind of media at the top
            </li>
        
            <li>
                Content below scrolls above it.
            </li>
        
            <li>
                By click on the fullscreen area, content scrolls until the top of the screen is reached.
            </li>
        
            <li>
                The media must be inserted via the slot called fullscreen
            </li>
        
            <li>
                All content on this page should be inserted into the slot called content. Like this they will get a background color.
            </li>
        
            <li>
                No information from Prismic is needed.
            </li>
        </div>
    </span>
</LayoutCover>