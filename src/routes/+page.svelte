<script>
	// Import all components which will be used on this page
	import Seo from '$lib/components/functionality/seo/index.svelte';
	// import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte';
	// import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte';

	// Get the data from above
  export let data
  const { document, setup } = data
</script>

<Seo {setup} {document} />