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
    import NavigationDesktopLayeredSlot from '$lib/modules-static/navigations/navigation-desktop-layered-slot/navigation-desktop-layered-slot.svelte'
    
    // Get the data from above
	export let setup
</script>

<NavigationDesktopLayeredSlot data={setup.data} layers="2">
    Slot Content
</NavigationDesktopLayeredSlot>

<div class="bg-neutral-100 min-h-screen w-full">
    Content
</div>