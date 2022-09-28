<script>
  export let start
  export let span
</script>

<div
  style="
    grid-column: {start} / span {span};
  ">
  <slot />
</div>
