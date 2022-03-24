<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/functionality/prismic/client'

    export async function load({ session }) {

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
    import VideoControls from '$lib/modules-flex/videos/video-controls/video-controls.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<VideoControls inputVideoUrl="{document.data.video_controls_vimeo[0].text}" inputVideoPoster="{document.data.video_controls_poster.Big.url}" height="h-40vw" sliderClicked={false} index="{0}" slideIndex="{0}" />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Video Controls
    </h3>

    <li>
        Displays a video with controls: progress bar, play / pause, sound on/off, Fullscreen
    </li>

    <li>
        Remove controls when playing and mouse not moving
    </li>

    <li>
        If used in slider, it will stop the video when switching the slide. Also it will set a local variable to true, if the controls are hiding, when the video is playing. Like this the arrows tof the slider can also be hidden.
    </li>

    <li>
        If NOT used in a slider, leave those props as they are: sliderClicked={false} index="{0}" slideIndex="{0}"
    </li>
</div>