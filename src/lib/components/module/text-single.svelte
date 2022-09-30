<script>
	export let text
	export let bgColor
	export let width
</script>

<RootContainer {bgColor} {width} >
	<RootGrid>
		<div class="col-span-12 py-4 bg-white rounded-md">
			<AtomText classes="text-center text-xl font-light">
				{text}
			</AtomText>
		</div>
	</RootGrid>
</RootContainer>