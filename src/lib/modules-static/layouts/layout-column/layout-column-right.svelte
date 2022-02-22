<script>
	// Import Modules which are used to display the content
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'
    import SliderComplex from '$lib/modules-flex/sliders/slider-complex/slider-complex.svelte'

	// Get data from parent component
	export let input
</script>

<HeadlineSimple inputText={input.data.title[0].text} />
<SliderComplex inputLoop={input.data.slider} height="h-50vw sm:h-30vw" classes="bg-white" />