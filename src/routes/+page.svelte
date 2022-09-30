<script>
	export let data

	const { document, setup } = data
</script>

<ToolSeo {setup} {document} />

<div class="w-1/3">
	<AtomVideo src='https://www.w3schools.com/html/mov_bbb.mp4' controls loop/>
	<AtomVideo src='https://www.w3schools.com/html/mov_bbb.mp4' autoplay loop/>
</div>

<ModuleTextBox text={'Width: width-xs'} bgColor='bg-neutral-100' width='width-xs' />
<ModuleTextBox text={'Width: width-sm'} bgColor='bg-neutral-200' width='width-sm' />
<ModuleTextBox text={'Width: width-md'} bgColor='bg-neutral-100' width='width-md' />
<ModuleTextBox text={'Width: width-lg'} bgColor='bg-neutral-200' width='width-lg' />
<ModuleTextBox text={'Width: width-xl'} bgColor='bg-neutral-100' width='width-xl' />
<ModuleTextBox text={'Width: width-2xl'} bgColor='bg-neutral-200' width='width-2xl' />
<ModuleTextBox text={'Width: width-3xl'} bgColor='bg-neutral-100' width='width-3xl' />
<ModuleTextBox text={'Width: width-4xl'} bgColor='bg-neutral-200' width='width-4xl' />
<ModuleTextBox text={'Width: width-5xl'} bgColor='bg-neutral-100' width='width-5xl' />
<ModuleTextBox text={'Width: width-6xl'} bgColor='bg-neutral-200' width='width-6xl' />
<ModuleTextBox text={'Width: width-7xl'} bgColor='bg-neutral-100' width='width-7xl' />
<ModuleTextBox text={'Width: full'} bgColor='bg-neutral-200' width='full' />
<ModuleTextBox text={'Width: screen'} bgColor='bg-neutral-100' width='screen' />
<ModuleTextBox text={'Width: undefined'} bgColor='bg-neutral-200'/>