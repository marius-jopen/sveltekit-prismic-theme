<script>
    // Import components which are used
	import Text from '$lib/modules-basic/text.svelte'

    // Get data from parent Component
    export let itemLeft
    export let itemMiddle
    export let itemRight
</script>

<div class="sm:flex px-8 pt-6 pb-8 bg-white border-t border-lines border-b">
    <div class="sm:w-1/4 text-4xl uppercase">
        <Text text={itemLeft} hasRichtext={true} classes={''} classesRichtext={''}/>
    </div>

    <div class="sm:w-1/2 text-lg">
        <Text text={itemMiddle} hasRichtext={true} classes={''} classesRichtext={''}/>
    </div>

    <div class="sm:w-1/4 text-lg">
        <Text text={itemRight} hasRichtext={true} classes={''} classesRichtext={''}/>
    </div>
</div>