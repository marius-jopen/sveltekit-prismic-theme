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
    import FooterSimple from '$lib/modules-static/navigations/footer-simple/footer-simple.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<FooterSimple data={setup.data} />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Footer Simple
    </h3>

    <li>
        Displays the name and the footer navigation.
    </li>

    <li>
        No mobile version yet.
    </li>

    <li>
        Only the information from the Prismic setup page is needed.
    </li>
</div>