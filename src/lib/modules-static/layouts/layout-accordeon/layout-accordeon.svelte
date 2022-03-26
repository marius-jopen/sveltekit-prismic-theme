<script>
    // Value which gets passed down to this comp
    export let inputHeadline

	// Import transition functin from Svelte
	import { slide } from "svelte/transition";

    // Variables which get used in this comp
    let accordeonState = false

    function toggleAccordeon() {
        if(accordeonState == false) {
            accordeonState = true
        } else {
            accordeonState = false
        }
    }
</script>

<div class="-mt-px">
    <div on:click={toggleAccordeon} class="cursor-pointer border-t border-b border-lines px-4 py-2 textHoverGrey">
        {inputHeadline}
    </div>

    {#if accordeonState == true}
        <div class="content" transition:slide={{ duration: 300 }}>
            <div class="border-b border-lines px-4 py-2">
                <slot>
                </slot>
            </div>
        </div>
    {/if}
</div>