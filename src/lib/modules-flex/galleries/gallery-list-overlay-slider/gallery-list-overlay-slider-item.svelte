<script>
    // Value which gets passed down to this comp
    export let item
	
    // Import components which are used
	import Image from '$lib/modules-basic/image.svelte'
	import Text from '$lib/modules-basic/text.svelte'
</script>

<div class="border-b border-lines">
	<!-- Display image basic comp -->
	<Image image={item.gallery_list_overlay_slider_image} imageSize={'Big'} classes={''} />

	<!-- Display text basic comp -->
	<Text text={item.gallery_list_overlay_slider_caption} hasRichtext={true} classes={''} classesRichtext={''}/>
</div>