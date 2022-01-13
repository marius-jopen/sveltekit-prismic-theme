<script>
	export let slice
    export let inputHeadline

	let headline

	if (slice == undefined){
		headline = inputHeadline
	} else {
		headline = slice.primary.headline
	}
</script>

<div class="text-3xl py-16 border-b border-lines text-center">
    {headline}
</div>