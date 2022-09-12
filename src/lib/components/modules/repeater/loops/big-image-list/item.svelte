<script>
	// Import child components which are used in this module
    export let item
	export let type
</script>

<a data-sveltekit-prefetch href="/{type}s/{item.uid}" class="relative block w-full">
    <img src="{item.data.preview_image.Big.url}" class="h-screen object-cover w-full" alt="{item.data.preview_image.alt}">
    
    <div class="-mt-16 sm:mt-0 z-10 absolute h-full top-0 flex flex-col justify-center text-white text-center w-full">
        <div class="text-3xl md:text-5xl pb-2">
            {item.data.title[0].text}
        </div>

        <div class="uppercase text-xs tracking-widest">
            {item.data.sub_title[0].text}
        </div>
    </div>
</a>