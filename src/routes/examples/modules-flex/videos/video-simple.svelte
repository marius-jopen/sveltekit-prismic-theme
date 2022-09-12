<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/components/functionality/prismic/client'

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
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import VideoSimple from '$lib/modules-flex/videos/video-simple/video-simple.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<VideoSimple inputVideoUrl={document.data.video_simple_vimeo[0].text} inputVideoPoster={document.data.video_simple_poster.Big.url} />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Video Simple
    </h3>

    <li>
        Displays a video on loop and muted
    </li>

    <li>
        For manual use, put in the full url of the video and the array of the poster
    </li>
</div>