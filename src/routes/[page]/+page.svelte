<script>
  // Import all components which will be used on this page
  import Seo from '$lib/components/functionality/seo/seo.svelte'

  import ModulesSlices from "$lib/components/modules/slices/index.svelte"

  // Get the data from above
  export let data
</script>

<Seo {...data} />

<ModulesSlices slices={document.data.body} />