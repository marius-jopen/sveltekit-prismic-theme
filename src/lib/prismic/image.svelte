<script>
  export let src
  export let alt = ''

	let width
	let loaded

	function imageLoaded() {
		loaded = true
	}
</script>

<div bind:offsetHeight={width} class="w-full relative">
	<img src="{src}?&w=4" alt="{alt}" width={width} class="w-full">

	<img
	on:load="{imageLoaded}"
	srcset="
		{src}?&w={width}&dpr=1 1x,
		{src}?&w={width}&dpr=2 2x,
		{src}?&w={width}&dpr=3 3x
	"
	src="{src}?&w={width}"
	alt="{alt}" width={width}
	class="w-full absolute z-10 top-0 left-0 transition-opacity duration-500 opacity-0 {loaded ? 'opacity-100' : ''}">
</div>