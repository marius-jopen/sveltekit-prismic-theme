<script>
  export let data
  const { document, setup } = data
</script>

<ToolSeo {document} {setup} />

<SliceLoop slices={document.data.body} />