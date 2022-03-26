<script>
    // Import components which are used
	import Text from '$lib/modules-basic/text.svelte'

    // Get data from parent Component
    export let item
</script>

<div class="border-lines border-b border-t">
    <Text text={item.slider_video_full_info_caption} hasRichtext={true} classes={''} classesRichtext={'px-4 pt-1 pb-3'}/>
</div>