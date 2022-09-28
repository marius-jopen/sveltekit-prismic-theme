<script>
	export let data

	const { document, setup } = data
</script>

<ToolSeo {setup} {document} />

<RootGrid px={4} gap={4} columns={12}>
  <RootGridItem start={1} span={12} />
  <RootGridItem start={2} span={7}>
    <div class="bg-red-400">
      hallo
    </div>
  </RootGridItem>
  <RootGridItem start={2} span={7} />
  <!-- <div class="col-span-full bg-orange-500" style="margin: 0 -{4 / 4}rem;">Full</div> -->
</RootGrid>

<style lang="postcss">
  
</style>