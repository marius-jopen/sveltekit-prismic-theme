<script>
    // Import components which are used
	import ParagraphRichtextBig from "$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte"

    // Get data from parent Component
    export let item
</script>

<div class="bg-white border-t border-lines">
    <ParagraphRichtextBig inputLongText={item.slider_video_full_info_caption} />
</div>