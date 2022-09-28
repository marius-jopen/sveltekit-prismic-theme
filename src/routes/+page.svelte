<script>
	export let data

	const { document, setup } = data
</script>

<ToolSeo {setup} {document} />

<RootGrid px={4} gap={4} columns={12}>
	<ModuleImageBox
	px={4}
	start={1}
	span={12}
	fullWidth={false}
	paddingTop={10}
	paddingBottom={10}
	background='bg-red-200'
	/>
</RootGrid>