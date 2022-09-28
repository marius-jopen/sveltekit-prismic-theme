<script>
	export let data

	const { document, setup } = data
</script>

<ToolSeo {setup} {document} />

<RootGrid px={4} gap={4} columns={12}>
  <div class="col-start-3 col-span-7 bg-red-300">one</div>
  <div class="col-start-1 col-span-4 bg-green-500">two</div>
  <div class="col-start-5 col-span-7 bg-blue-300">thre</div>
  <div class="col-span-full bg-orange-500" style="margin: 0 -{4 / 4}rem;">Full</div>
  <div class="col-start-3 col-span-7 bg-red-300">one</div>
  <div class="col-start-1 col-span-4 bg-green-500">two</div>
  <div class="col-start-5 col-span-7 bg-blue-300">thre</div>
</RootGrid>

<style lang="postcss">
  
</style>