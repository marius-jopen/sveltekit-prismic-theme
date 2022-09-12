<script>
    // Import child components which are used in this module
    import SliderComplexVerticalItem from '$lib/modules-flex/sliders/slider-complex-vertical/slider-complex-vertical-item.svelte';

    // Import the Splide slider library
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';

    // Get data from parent component
    export let items

    // Define variables which are used in the slider
    let functionDelayTime = 1000
    let scrollPossible = true
    let splideSlider
    let peekDownStatus = false
    let peekUpStatus = false
    let heightVh = 80

    // Function which gets called when the scrollwheel is used
    // It prevents the function to be called too fast again by a delay time which can be chosen
    // This is important for macOS touchpads
    function onMouseWheel(e) {
        if(scrollPossible == true) {
            // Call function which detects the scroll direction
            detectScrollDirection(e)

            // Sets the timeout of the scroll
            scrollPossible = false
            
            setTimeout(function(){
                scrollPossible = true
            }, functionDelayTime)
        }
    }

    // Function which calls the trigger up or down function
    function detectScrollDirection(e) {
        if(e.deltaY > 0) {
            triggerUp()
        } else {
            triggerDown()
        }
    }

    // Two functions to trigger the up or down slider
    function triggerUp() {
        splideSlider.splide.go( '>' );
    }

    function triggerDown() {
        splideSlider.splide.go( '<' );
    }

    // Functions to slide the slider up or down to see a preview
    // And then switch to the next slide
    function peekDownEnter() {
        peekDownStatus = true
    }

    function peekDownLeave() {
        peekDownStatus = false
    }

    function peekUpEnter() {
        peekUpStatus = true
    }

    function peekUpLeave() {
        peekUpStatus = false
    }
</script>

<div class="relative hidden sm:block">
    <div class="peekDown-tue peekDown-{peekDownStatus} peekUp-{peekUpStatus} slider-video-fullscreen border-lines border-b" on:mousewheel={e => onMouseWheel(e)}>
        <Splide
        bind:this={splideSlider}
        options={{
            perMove: 1,
            drag: false,
            height: heightVh + 'vh', // Height of the slider and its slides
            keyboard: true,
            speed: 1500, // Slide speed when triggered
            wheel: false,
            direction: 'ttb',
            type: 'loop',
            focus: 'center',
            pagination: false,
            arrows: false,
        }}>
            {#each items as item}
                <!-- 
                Check if the item contains a preview video. Either HTML or as an embed via Vimeo etc… 
                Not mandatory, just avoiding empty slides 
                Also check if it is a group slide which only display related projects
                -->
                <SplideSlide>
                    <SliderComplexVerticalItem item={item} />
                </SplideSlide>
            {/each}
        </Splide>
    </div>

    <!-- Invisible bars which trigger the next slide and also preview the next slide -->
    <div class="absolute w-full h-16 top-0 cursor-pointer" on:mouseenter={e => peekUpEnter()} on:mouseleave={e => peekUpLeave()} on:click={e => triggerDown()}>
    </div>

    <div class="absolute w-full h-16 bottom-0 cursor-pointer" on:mouseenter={e => peekDownEnter()} on:mouseleave={e => peekDownLeave()} on:click={e => triggerUp()}>
    </div>
</div>

<style>
    /* Slide up or down when hovering the invisible top and bottom bars */
    :global(.splide__list) {
        transition: margin-top 0.4s;
    }

    :global(.peekUp-true .splide__list) {
        margin-top: 60px !important;
    }

    :global(.peekDown-true .splide__list) {
        margin-top: -60px !important;
	}
</style>