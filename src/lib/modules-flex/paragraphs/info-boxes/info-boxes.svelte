<script>
    // Import components which are used
	import Text from '$lib/modules-basic/text.svelte'

    // Get data from parent Component
    export let item
</script>

<div class="sm:flex px-8 py-8 bg-white border-t border-lines">
    <div class="sm:w-1/4 text-4xl uppercase">
        <Text text={item.slider_caption} hasRichtext={true} classes={''} classesRichtext={''}/>
    </div>

    <div class="sm:w-1/2 text-lg">
        <Text text={item.slider_caption} hasRichtext={true} classes={''} classesRichtext={''}/>
    </div>

    <div class="sm:w-1/4 text-lg">
        <Text text={item.slider_caption} hasRichtext={true} classes={''} classesRichtext={''}/>
    </div>
</div>