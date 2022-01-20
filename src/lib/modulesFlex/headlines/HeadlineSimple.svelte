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

<div class="text-xl py-3 border-b border-lines text-center bg-background">
    {headline}
</div>