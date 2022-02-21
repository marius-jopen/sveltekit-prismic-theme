<script>
	// Import Modules which are used to display the content
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'

	// Get data from parent component
	export let input
</script>

<HeadlineSimple inputText={input.data.title[0].text} />
<HeadlineSimple inputText={input.data.title[0].text} />
<HeadlineSimple inputText={input.data.title[0].text} />