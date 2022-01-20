<script>
    import Hamburger from 'svelte-hamburgers'
	import { fade } from 'svelte/transition'

    export let data

    let open = false

	function close() {
        open = false
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/collapse.css" />
</svelte:head>

<div class="sm:hidden flex h-12 top-0 fixed w-screen z-50 px-2 border-b border-lines bg-background justify-between cursor-pointer">
    <a sveltekit:prefetch on:click="{close}" class="text-lg pt-2" href="/">
        {data.website_title[0].text}
    </a>
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

{#if open == true}
    <div class="flex sm:hidden top-12 h-screen fixed w-screen z-50 bg-background flex-col justify-center" transition:fade>
        <div class="flex flex-col text-center text-lg -mt-20">
			{#each data.navigation_top as navItem}
				<a sveltekit:prefetch on:click="{close}" class="py-1" href="/{navItem.uid[0].text}">
					{navItem.title[0].text}
				</a>
			{/each}
		</div>
    </div>
{/if}

<div class="h-12 block sm:hidden">
	&nbsp;
</div>