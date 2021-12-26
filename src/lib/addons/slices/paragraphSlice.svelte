<script>
    import PrismicDom from 'prismic-dom';
    export let slice
</script>

<div class="py-4 sm:py-16 border-b border-lines">
	<div class="mx-auto px-4 sm:w-8/12 text-xl sm:text-center">
		{@html PrismicDom.RichText.asHtml(slice.primary.long_text)}
	</div>
</div>