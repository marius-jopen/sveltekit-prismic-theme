<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/functionality/prismic/client'

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
    import NavigationDesktopLayeredSlot from '$lib/modules-static/navigations/navigation-desktop-layered-slot/navigation-desktop-layered-slot.svelte'
    import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationDesktopLayeredSlot data={setup.data} layers="2">
    Slot Content
</NavigationDesktopLayeredSlot>

<NavigationMobileSimple data={setup.data} />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Navigation Desktop Layered Slot
    </h3>

    <li>
        A navigation bar with a layer (slot) for some extra content like a filter bar etc… 
    </li>

    <li>
        This layer is optional and can be switched on or off by changing the prop called layers from 1 to 2.
    </li>

    <li>
        Is fixed to the top, but pushes the content down, so it does not hide information
    </li>
    
    <li>
        Only the information from the Prismic setup page is needed.
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