<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '../../../../utils/client'

    export async function load() {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

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
    import NavigationDesktopContentScroll from '$lib/modules-static/navigations/navigation-desktop-content-scroll/navigation-desktop-content-scroll.svelte'
    
    // Get the data from above
	export let setup
</script>

<NavigationDesktopContentScroll data={setup.data} />

<div class="bg-neutral-100 min-h-screen w-full">
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
    scroll
    <br>
</div>