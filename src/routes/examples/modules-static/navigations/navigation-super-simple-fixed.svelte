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
    import NavigationSuperSimpleFixed from '$lib/modules-static/navigations/navigation-super-simple-fixed/navigation-super-simple-fixed.svelte'
    
    // Get the data from above
	export let setup
</script>

<NavigationSuperSimpleFixed data={setup.data} />

<div class="bg-neutral-100 min-h-screen w-full">
    Content
</div>