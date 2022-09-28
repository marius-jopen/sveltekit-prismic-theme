<script>
  export let data
  const { document, setup } = data
</script>

<ToolSeo {document} {setup} />

<RootSlices slices={document.data.body} />