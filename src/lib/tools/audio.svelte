<script>
  export let field

  export const play = () => {
    paused = false
  }

  export const pause = () => {
    paused = true
  }

  let paused
</script>

<audio bind:paused src={field.url} />