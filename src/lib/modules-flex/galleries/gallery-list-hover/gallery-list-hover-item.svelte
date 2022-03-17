<script>
    // Imprt child comps which are getting used
    import Text from '$lib/modules-basic/text.svelte'

    // Value which gets passed down to this comp
    export let item

    // Value which gets passed up via binding
    export let value

    // Variables which get used in this comp
    let effect
    let itemHoverUrl = ""
    let itemHoverAlt = ""
    let itemWidth = Math.floor((Math.random() * 50) + 25)
    let marginLeft = Math.floor((Math.random() * (100 - itemWidth - 2)) + 2)
    let marginBottom = Math.floor((Math.random() * 25) + 5)
    let mouseOver

    // Translates the selected effect to the tailwind CSS class
    if (item.gallery_image_effect == "blur") {
        effect = "blur-3xl"
    }

    if (item.gallery_image_effect == "invert") {
        effect = "invert"
    }

    if (item.gallery_image_effect == "invert blur") {
        effect = "invert blur-3xl"
    }

    // Checks if an hover image exists and if yes, define the variable to it
    if (item.gallery_image_hover.Big.url) {
        itemHoverUrl = item.gallery_image_hover.Big.url
    }

    if (item.gallery_image_hover.Big.url) {
        itemHoverAlt = item.gallery_image_hover.alt
    }

    // Make variables reactive
    // Creates the cimplete image which will get passed up as a prop
    // The reason why it is done like this is to avoid a clickering which came up, when 
    // only the image url was passed to the top
    $: mouseOver = `<img class="hidden sm:block fixed top-0 z-0 w-full h-full object-cover filter ` + effect + `" src="` + itemHoverUrl + `" alt="` + itemHoverAlt + `" >`

    // Function which gets called when the mouse enters the image
    function mouseEnter() {
        if(item.gallery_image_hover.Big.url) {
            value = mouseOver
        } else {
            value = null
        }
    }

    // Function which gets called when the mouse leaves the image
    function mouseLeave() {
        value = null
    }
</script>

<!-- Desktop -->
<div class="hidden sm:block pb-20" style="margin-left: {marginLeft}%; width: {itemWidth}%; padding-bottom: {marginBottom}vw">
    {#if item.gallery_image_link[0]}
        <!-- Content of the item which gets displayed when there is a link -->
        <a sveltekit:prefetch href="{item.gallery_image_link[0].text}">
            {#if item.gallery_image.Big.url}
                <img src="{item.gallery_image.Big.url}" alt="{item.gallery_image.alt}" class="image object-bottom object-contain pb-1" style="height: {itemWidth}vw" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
            {/if}

            <Text text={item.gallery_image_long_text} hasRichtext={true} classes={''} classesRichtext={'uppercase text-xs tracking-widest leading-4 text-white'}/>
            
            {#if item.gallery_image_caption[0]}
                <div class="text-white uppercase text-xs tracking-widest leading-4">
                    {item.gallery_image_caption[0].text}
                </div>
            {/if}
        </a>
    {:else}
    <!-- Content of the item which gets displayed when there is no link -->
        {#if item.gallery_image.Big.url}
            <img src="{item.gallery_image.Big.url}" alt="{item.gallery_image.alt}" class="image object-bottom object-contain pb-1" style="height: {itemWidth}vw" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
        {/if}

        <Text text={item.gallery_image_long_text} hasRichtext={true} classes={''} classesRichtext={'uppercase text-xs tracking-widest leading-4 text-white'}/>
        
        {#if item.gallery_image_caption[0]}
            <div class="text-white uppercase text-xs tracking-widest leading-4">
                {item.gallery_image_caption[0].text}
            </div>
        {/if}
    {/if}
</div>

<!-- And this is fore mobile -->
{#if item.gallery_image_link[0]}
    <!-- With link -->
    <a sveltekit:prefetch href="{item.gallery_image_link[0].text}" class="relative block sm:hidden text-white uppercase text-xs tracking-widest leading-4">
        {#if item.gallery_image.Big.url}
            <img src="{item.gallery_image.Big.url}" alt="{item.gallery_image.alt}" class="w-full">

            <div class="absolute left-0 bottom-0 mix-blend-difference px-3 pb-3">
                {#if item.gallery_image_caption[0]}
                    {item.gallery_image_caption[0].text}
                {/if}

                <Text text={item.gallery_image_long_text} hasRichtext={true} classes={''} classesRichtext={''}/>
            </div>
        {/if}
    </a>
{:else}
    <!-- Without link -->
    <div class="relative block sm:hidden text-white uppercase text-xs tracking-widest leading-4">
        {#if item.gallery_image.Big.url}
            <img src="{item.gallery_image.Big.url}" alt="{item.gallery_image.alt}" class="w-full">

            <div class="absolute left-0 bottom-0 mix-blend-difference px-3 pb-3">
                {#if item.gallery_image_caption[0]}
                    {item.gallery_image_caption[0].text}
                {/if}

                <Text text={item.gallery_image_long_text} hasRichtext={true} classes={''} classesRichtext={''}/>
            </div>
        {/if}
    </div>
{/if}

<style lang="postcss">
    .image {
        max-height: 70vh;
        object-position: bottom;
    }
</style>