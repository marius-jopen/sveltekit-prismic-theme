<script>
  import Seo from '$lib/components/functionality/seo/seo.svelte'
  import ModulesSlices from "$lib/components/modules/slices/index.svelte"

  export let data
</script>

<Seo {...data} />

<ModulesSlices slices={document.data.body} />