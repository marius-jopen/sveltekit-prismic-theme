<!-- Internal and external links -->
<!-- Deals with empty ones -->

<script>
  import { linkResolver } from "$lib/prismic/setup"
	import { page } from "$app/stores"
  import { createEventDispatcher } from "svelte"

  export let document
  export let href = false

  export let classes = ""
  export let prefetch = ""  // empty string for on
  export let reload = "off"    // off for disabled
  export let activeClass = "underline"

  let active = false

  const dispatch = createEventDispatcher()

  if (document) {
    href = linkResolver(document)
  }

  const handleClick = (e) => {
    dispatch('click', e)
  }

  $: active = href === $page.url.pathname
</script>

{#if href}
  <a
    {href}
    class="cursor-pointer {classes} {active ? activeClass : ''}"
    on:click={handleClick}
    data-sveltekit-prefetch={prefetch}
    data-sveltekit-reload={reload}
  >
    <slot></slot>
  </a>
{:else}
  <slot></slot>
{/if}