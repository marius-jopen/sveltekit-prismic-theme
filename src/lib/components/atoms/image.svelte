<!-- An image that scales resolution with the viewport -->

<script>
  import { fade } from "svelte/transition"

  export let field
  export let classes = ""
  export let fixedSize = false
  export let staticImage = false

  let url, clientWidth
  let size = 'Medium'

  const uncompressed = (url) => url.replace(/\?.*$/, '')

  if (fixedSize) size = fixedSize

  $: {
    if (!fixedSize && clientWidth)  {
      if (clientWidth < 768) {
        size = 'Small'
      } else if (clientWidth < 1200) {
        size = 'Medium'
      } else if (clientWidth < 1600) {
        size = 'Big'
      } else {
        size = 'Original'
      }
    }
  }

  $: url = size === 'Original' ? uncompressed(field.url) : field[size].url
</script>

{#if !staticImage}
  <div class={classes} bind:clientWidth transition:fade>
    <img
      src={url}
      alt={field.alt}
    >
  </div>
{:else}
  <div class={classes} bind:clientWidth transition:fade>
    <img
      src={url}
      alt={field.alt}
    >
  </div>
{/if}
