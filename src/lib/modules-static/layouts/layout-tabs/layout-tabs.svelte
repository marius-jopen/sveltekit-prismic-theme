<script>
    // Get data from parent component
    export let inputTabNumber
    export let headline1
    export let headline2
    export let headline3
    export let headline4

    // Variables which are used in this comp
    let currentTab = 1
    let buttonStyle = 'cursor-pointer pr-2'
</script>

<div class="flex px-4 py-2 border-lines border-b">
    <!-- If 2 slots are used -->
    {#if inputTabNumber == 2}
        <div on:click="{e => currentTab = 1}" class="{buttonStyle}">
            {headline1}
        </div>

        <div on:click="{e => currentTab = 2}" class="{buttonStyle}">
            {headline2}
        </div>
    {/if}

    <!-- If 3 slots are used -->
    {#if inputTabNumber == 3}
        <div on:click="{e => currentTab = 1}" class="{buttonStyle}">
            {headline1}
        </div>

        <div on:click="{e => currentTab = 2}" class="{buttonStyle}">
            {headline2}
        </div>

        <div on:click="{e => currentTab = 3}" class="{buttonStyle}">
            {headline3}
        </div>
    {/if}

    <!-- If 4 slots are used -->
    {#if inputTabNumber == 4}
        <div on:click="{e => currentTab = 1}" class="{buttonStyle}">
            {headline1}
        </div>

        <div on:click="{e => currentTab = 2}" class="{buttonStyle}">
            {headline2}
        </div>

        <div on:click="{e => currentTab = 3}" class="{buttonStyle}">
            {headline3}
        </div>

        <div on:click="{e => currentTab = 4}" class="{buttonStyle}">
            {headline4}
        </div>
    {/if}
</div>

<div class="border-lines border-b px-4 py-2">
    <!-- If 2 slots are used -->
    {#if inputTabNumber == 2}
        {#if currentTab == 1}
            <slot name="slot-1">
            </slot>
        {:else if currentTab == 2}
            <slot name="slot-2">
            </slot>
        {/if}
    {/if}

    <!-- If 3 slots are used -->
    {#if inputTabNumber == 3}
        {#if currentTab == 1}
            <slot name="slot-1">
            </slot>
        {:else if currentTab == 2}
            <slot name="slot-2">
            </slot>
        {:else if currentTab == 3}
            <slot name="slot-3">
            </slot>
        {/if}
    {/if}

    <!-- If 4 slots are used -->
    {#if inputTabNumber == 4}
        {#if currentTab == 1}
            <slot name="slot-1">
            </slot>
        {:else if currentTab == 2}
            <slot name="slot-2">
            </slot>
        {:else if currentTab == 3}
            <slot name="slot-3">
            </slot>
        {:else if currentTab == 4}
            <slot name="slot-4">
            </slot>
        {/if}
    {/if}
</div>