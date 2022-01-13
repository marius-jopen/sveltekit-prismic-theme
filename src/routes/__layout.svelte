<script context="module">
    import Client from '../utils/client'

    export async function load() {
        const document = await Client.getSingle('setup')

        return {
            props: {
                document,
            }
        }
    }
</script>

<script>
	import '../app.postcss'
    import NavigationBarSimple from '$lib/modules/navigations/desktop-simple/bar.svelte'
	import NavigationBarSimpleSpacer from '$lib/modules/navigations/desktop-simple/spacer.svelte'
	import NavigationMobileSimple from '$lib/modules/navigations/mobile-simple/mobileNav.svelte'
	import NavigationMobileSimpleSpacer from '$lib/modules/navigations/mobile-simple/spacer.svelte'

    export let document
</script>

<NavigationBarSimple data={document.data} />
<NavigationBarSimpleSpacer />
<NavigationMobileSimple data={document.data} />
<NavigationMobileSimpleSpacer />

<main>
	<slot />
</main>