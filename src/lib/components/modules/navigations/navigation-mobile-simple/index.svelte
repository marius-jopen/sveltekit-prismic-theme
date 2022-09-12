<script>
    // Import hamburger library
    import Hamburger from 'svelte-hamburgers'
	import { fade } from 'svelte/transition'

    // Get data from parent component. Probably from the setup page
    export let data

    // Define variable for the open and closed state of the menu and set it to closed
    let open = false

    // Classes which are connected to the height of the navigation
    let height = 'h-12 text-lg'

    // Function which opens the menu
	function close() {
        open = false
    }
</script>

<!-- Embed the CSS of the hamburger menu -->
<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/collapse.css" />
</svelte:head>

<div class="{height} sm:hidden flex top-0 fixed w-screen z-50 px-2 border-b border-lines bg-background justify-between cursor-pointer">
    <!-- Title -->
    <a data-sveltekit-prefetch on:click="{close}" class="pt-2" href="/">
        {data.website_title[0].text}
    </a>

    <!-- Burger -->
    <div class="pt-0.5">
        <Hamburger
        bind:open
        type="collapse"
        --padding="10px"
        --layer-height="2px"
        --layer-width="25px"
        --layer-spacing="6px"
        />
    </div>
</div>

<!-- Menu which can open or close -->
{#if open == true}
    <div class="flex sm:hidden top-12 h-screen fixed w-screen z-50 bg-background flex-col justify-center" transition:fade>
        <div class="flex flex-col text-center text-lg -mt-20">
			{#each data.navigation_top as navItem}
                {#if navItem.uid[0]}
                    <a data-sveltekit-prefetch on:click="{close}" class="py-1" href="/{navItem.uid[0].text}">
                        {navItem.title[0].text}
                    </a>    
                {/if}
			{/each}
		</div>
    </div>
{/if}

<!-- Invisible bar which hads the same height as the navigation to push the content down -->
<div class="{height} block sm:hidden">
	&nbsp;
</div>