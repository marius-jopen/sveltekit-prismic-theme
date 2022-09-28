<script>
	export let data

	const { document, setup } = data
  const slices = [{ slice_type: 'random_component' }, { slice_type: 'undefined_component' }]
</script>

<ToolSeo {setup} {document} />

<AtomText>
  Hallo
</AtomText>

<AtomImage src="https://gitlab.com/uploads/-/system/user/avatar/2624106/avatar.png?width=96"/>

<SliceLoop {slices} />