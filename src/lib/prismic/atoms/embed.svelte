<script>
	export let embedCode
	export let classes
</script>

<div class="embed-container {classes}">
	{@html embedCode}
</div>

<style lang="postcss">
	:global(.embed-container) {
		position: relative;
		padding-bottom: 56.25%;
		overflow: hidden;
		max-width: 100%;
		height: auto;
	}

	:global(.embed-container iframe, .embed-container object, .embed-container embed) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>