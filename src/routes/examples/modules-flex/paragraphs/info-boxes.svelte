<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '$lib/functionality/client/client'

    export async function load() {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Get data from all-modules page
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
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import InfoBoxes from '$lib/modules-flex/paragraphs/info-boxes/info-boxes.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<InfoBoxes itemLeft={document.data.info_boxes_left} itemMiddle={document.data.info_boxes_middle} itemRight={document.data.info_boxes_right} />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Info Boxes
    </h3>

    <li>
        Displays three text boxes next to each other
    </li>
</div>