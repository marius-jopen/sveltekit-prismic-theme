<script context="module">
	import '../app.postcss'
    import NavigationBarSimple from '$lib/ui-lib-custom/navigations/desktop-simple/bar.svelte'
	import NavigationBarSimpleSpacer from '$lib/ui-lib-custom/navigations/desktop-simple/spacer.svelte'
	import NavigationMobileSimple from '$lib/ui-lib-custom/navigations/mobile-simple/mobileNav.svelte'
	import NavigationMobileSimpleSpacer from '$lib/ui-lib-custom/navigations/mobile-simple/spacer.svelte'
    import Client from '../utils/client';

    export async function load() {
        const document = await Client.getSingle('setup');
        return {
            props: {
                document,
            }
        };
    }
</script>

<script>
    export let document
</script>

<NavigationBarSimple data={document.data} />
<NavigationBarSimpleSpacer />
<NavigationMobileSimple data={document.data} />
<NavigationMobileSimpleSpacer />

<main>
	<slot />
</main>