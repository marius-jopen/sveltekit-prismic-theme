<script>
    // Value which gets passed down to this comp
    export let item
	
    // Import components which are used
	import Image from '$lib/modules-basic/image.svelte'
	import Text from '$lib/modules-basic/text.svelte'
</script>

<div class="">
	<!-- Display image basic comp -->
	<Image image={item.slider_fullscreen_image_image} imageSize={'Big'} classes={'h-screen w-full object-cover'} />

	<!-- Display text basic comp -->
	<Text text={item.slider_fullscreen_image_caption} hasRichtext={true} classes={''} classesRichtext={'absolute bottom-3 left-0 w-full text-center'}/>
</div>