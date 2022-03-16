<script>
    // Import child components which are used in this module
    import SliderVideoFullscreenItemRelatedItem from '$lib/modules-static/repeater/loops/slider-video-fullscreen/slider-video-fullscreen-item-related-item.svelte'

    // Get data from parent component
    export let item
    export let allItems
    export let heightVh
    export let type

    // Compare related field with all items and make list of those items
    const relatedItems = item.data.related_projects.map(i => {
        const uid = i.related_project.uid
        return allItems.results.find(p => p.uid === uid)
    })
</script>

<div class="video-box flex flex-wrap">
    {#each relatedItems as relatedItem}
        <!-- <SliderVideoFullscreenItemRelatedItem item={relatedItem} heightVh={heightVh} type={type}/> -->
    {/each}
</div>

<style>
    /* This removes the white or grey gap between the slides which is a bug from swiperJs I suppose */
    .video-box {
		height: calc(100% + 2px)
	}
</style>