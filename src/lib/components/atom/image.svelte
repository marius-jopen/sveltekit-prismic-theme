<!-- An image that scales resolution with the viewport -->

<script>
  export let field = null
  export let src = ""
  export let alt = ""
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

  $: {
    if (src) {
      url = src
    } else {
      url = size === 'Original' ? uncompressed(field.url) : field[size].url
      alt = field.alt
    }
  }
</script>

{#if !staticImage}
  <div class={classes} bind:clientWidth>
    <img
      src={url}
      {alt}
    >
  </div>
{:else}
  <div class={classes} bind:clientWidth>
    <img
      src={url}
      {alt}
    >
  </div>
{/if}
