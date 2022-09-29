<script>
	export let data

	const { document, setup } = data
</script>

<ToolSeo {setup} {document} />

<RootGrid px={4} gap={4} columns={12}>
	<ModuleImageBox px={4} start={1} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-100' text={"1"} />
	<ModuleImageBox px={4} start={2} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-200' text={"2"} />
	<ModuleImageBox px={4} start={3} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-300' text={"3"} />
	<ModuleImageBox px={4} start={4} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-400' text={"4"} />
	<ModuleImageBox px={4} start={5} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-500' text={"5"} />
	<ModuleImageBox px={4} start={6} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-600' text={"6"} />
	<ModuleImageBox px={4} start={7} span={1} paddingTop={10} paddingBottom={10} background='bg-red-600' text={"7"} />
	<ModuleImageBox px={4} start={8} span={1} paddingTop={10} paddingBottom={10} background='bg-red-500' text={"8"} />
	<ModuleImageBox px={4} start={9} span={1} paddingTop={10} paddingBottom={10} background='bg-red-400' text={"9"} />
	<ModuleImageBox px={4} start={10} span={1} paddingTop={10} paddingBottom={10} background='bg-red-300' text={"10"} />
	<ModuleImageBox px={4} start={11} span={1} paddingTop={10} paddingBottom={10} background='bg-red-200' text={"11"} />
	<ModuleImageBox px={4} start={12} span={1} paddingTop={10} paddingBottom={10} background='bg-red-100' text={"12"} />

	<ModuleImageBox fullWidth px={4} start={1} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-100' text={"1"} />
	<ModuleImageBox fullWidth px={4} start={2} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-200' text={"2"} />
	<ModuleImageBox fullWidth px={4} start={3} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-300' text={"3"} />
	<ModuleImageBox fullWidth px={4} start={4} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-400' text={"4"} />
	<ModuleImageBox fullWidth px={4} start={5} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-500' text={"5"} />
	<ModuleImageBox fullWidth px={4} start={6} span={1} paddingTop={10} paddingBottom={10} background='bg-blue-600' text={"6"} />
	<ModuleImageBox fullWidth px={4} start={7} span={1} paddingTop={10} paddingBottom={10} background='bg-red-600' text={"7"} />
	<ModuleImageBox fullWidth px={4} start={8} span={1} paddingTop={10} paddingBottom={10} background='bg-red-500' text={"8"} />
	<ModuleImageBox fullWidth px={4} start={9} span={1} paddingTop={10} paddingBottom={10} background='bg-red-400' text={"9"} />
	<ModuleImageBox fullWidth px={4} start={10} span={1} paddingTop={10} paddingBottom={10} background='bg-red-300' text={"10"} />
	<ModuleImageBox fullWidth px={4} start={11} span={1} paddingTop={10} paddingBottom={10} background='bg-red-200' text={"11"} />
	<ModuleImageBox fullWidth px={4} start={12} span={1} paddingTop={10} paddingBottom={10} background='bg-red-100' text={"12"} />

	<ModuleImageBox px={4} start={1} span={6} paddingTop={10} paddingBottom={10} background='bg-yellow-100' text={"1"} />
	<ModuleImageBox px={4} start={7} span={6} paddingTop={10} paddingBottom={10} background='bg-yellow-200' text={"2"} />
</RootGrid>