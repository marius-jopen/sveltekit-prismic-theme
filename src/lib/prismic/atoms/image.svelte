<script>
  export let src
	export let classes
	export let classesOuter
	export let styles

	let width
	let loaded = false

	function imageLoaded() {
		loaded = true
	}
</script>

<div bind:offsetWidth={width} class="w-full relative {classesOuter}" >
	<img src="{src.url}?&w=50&blur=50" alt="{src.alt}" style={styles} width={width} class="{classes} w-full">

	<img
	on:load="{imageLoaded}"
	srcset="
		{src.url}?&w={width}&fm=webp&lossless=true&dpr=1 1x,
		{src.url}?&w={width}&fm=webp&lossless=true&dpr=2 2x,
		{src.url}?&w={width}&fm=webp&lossless=true&dpr=3 3x
	"
	src="{src.url}?&w={width}&fm=webp&lossless=true"
	alt="{src.alt}"
	width={width}
	style={styles}
	class="{classes} w-full absolute z-10 top-0 left-0 transition-opacity duration-500 opacity-0 {loaded ? 'opacity-100' : ''}">
</div>