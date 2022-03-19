<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '$lib/functionality/client/client'

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

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Navigation Desktop Content Scroll
    </h3>

    <li>
        When the user scrolls down, the navigation items hide. When the user scrolls back up, the come back.
    </li>

    <li>
        Is fixed to the top, but pushes the content down, so it does not hide information
    </li>
</div>

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