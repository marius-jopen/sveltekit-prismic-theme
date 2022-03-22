<script>
	// Import components which are used
	import Text from '$lib/modules-basic/text.svelte'
    
    // Import scrollTo function
    import * as animateScroll from "svelte-scrollto";
 
	// Get data from parent component
	export let inputContent

    // Variables which are used in this comp
    let headerHeight = 100

    // Call Scroll function
    function scrollToContent(index) {
        animateScroll.scrollTo({element: '.index-' + index, offset: -headerHeight})
    }
</script>

<div class="parent relative z-10 bg-white">
	<div class="block w-full content">
		<!-- Mobile -->
		<div class="block md:hidden">
			{#each inputContent as item}
                <div class="border-b border-lines px-4 py-2 text-center">
                    {item.repeating_content_title[0].text}
                </div>

                <Text text={item.repeating_content_text} hasRichtext={true} classes={''} classesRichtext={'border-lines border-b px-4 pt-2 pb-4'}/>
            {/each}
		</div>

        <!-- Left -->
		<div class="right-box md:w-3/12 float-left sm:sticky border-lines border-r">
            <div class="px-4 py-4">
                {#each inputContent as item, index}
                    <div class="cursor-pointer" on:click="{e => scrollToContent(index)}">
                        {item.repeating_content_title[0].text}
                    </div>
                {/each}
            </div>
		</div>

		<!-- Right -->
		<div class="hidden md:block w-9/12 float-left relative h-full">
			{#each inputContent as item, index}
                <div class="border-b border-lines px-4 py-2 text-center index-{index}" id="index-"{index}>
                    {item.repeating_content_title[0].text}
                </div>

                <Text text={item.repeating_content_text} hasRichtext={true} classes={''} classesRichtext={'border-lines border-b px-4 pt-2 pb-4'}/>
            {/each}
		</div>

	</div>

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>

<style lang="postcss">
	.parent {
		min-height: 100vh;
	}

	.content:after {
		content: "";
		display: table;
		clear: both;
  	}

	.right-box {
		min-height: 100vh;
		top: 52px;
	}

	@media screen and (max-width: 640px) {
		.right-box {
			min-height: 0px;
		}
	}
</style>