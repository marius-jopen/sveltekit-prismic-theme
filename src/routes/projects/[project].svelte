<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/functionality/prismic/client'

    export async function load({ url, session, params }) {
        // Get current project uid
        const { project } = params // const project = params.project
        
        // Get api from client and include the session cookie which is important for the preview mode
        const api = await makeClient(session.cookie)

        // Get data from setup page
		const setup = await api.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'

        // Get data from the current page
        const document = await api.getByUID(type, project)

        // Return the data which we got above
        return {
            props: {
                document,
                type,
                setup
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
    import Seo from '$lib/functionality/seo/seo.svelte'
    import NavigationDesktopSlot from '$lib/modules-static/navigations/navigation-desktop-slot/navigation-desktop-slot.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
	import BackHistory from "$lib/functionality/back-history/back-history.svelte"
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'
    import ParagraphRichtextBig from '$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopSlot data={setup.data}>
    <BackHistory />
</NavigationDesktopSlot>

<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputText={document.data.title[0].text} inputClasses={""} />

<HeadlineSimple inputText={document.data.sub_title[0].text} inputClasses={""} />

<ParagraphRichtextBig inputText={document.data.description} />