<script>
  export let src
  export let alt = ''

	let width
</script>

<div bind:offsetHeight={width} class="w-full">
	<img
	srcset="
		{src}?&w={width}&auto=enhance&dpr=1 1x,
		{src}?&w={width}&auto=enhance&dpr=2 2x,
		{src}?&w={width}&auto=enhance&dpr=3 3x
	"
	src="{src}?&w={width}&auto=enhance"
	alt="{alt}"
	class="w-full">
</div>