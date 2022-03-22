<script>
    // Value which gets passed down to this comp
    export let inputHeadline

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

<div class="-mt-px {accordeonState == true ? 'active' : ''}">
    <div on:click={toggleAccordeon} class="cursor-pointer border-t border-b border-lines px-4 py-2">
        {inputHeadline}
    </div>

    <div class="content max-h-0">
        <div class="border-b border-lines px-4 py-2">
            <slot>
            </slot>
        </div>
    </div>
</div>

<style lang="postcss">
    .content {
        overflow-y: hidden;
        transition: max-height 1s;
    }

    .active .content {
        max-height: 1000px;
    }
</style>