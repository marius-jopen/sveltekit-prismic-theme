<script>
    // Import child components which are used in this module
    import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'

    // Get data from parent Component
    export let item
</script>

<div class="w-full overflow-y-scroll h-screen pt-4 pb-10 px-12">
    <HeadlineSimple inputText={item.data.title[0].text} />
</div>