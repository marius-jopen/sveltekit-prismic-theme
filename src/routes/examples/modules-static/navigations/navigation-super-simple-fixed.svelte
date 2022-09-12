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
    import NavigationSuperSimpleFixed from '$lib/modules-static/navigations/navigation-super-simple-fixed/navigation-super-simple-fixed.svelte'
    import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationSuperSimpleFixed data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<div class="border-b border-lines px-3 pt-16 pb-3 text-lg">
    <h3>
        Navigation Super Simple
    </h3>

    <li>
        Is fixed to the top
    </li>

    <li>
        Adds a / between each navigation point
    </li>

    <li>
        Can be also used for mobile if not many items are in the navigation
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