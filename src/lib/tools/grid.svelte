<script>
  export let gap
  export let columns
</script>

<div
  class="grid"
  style="
    grid-template-columns: repeat({columns}, minmax(0, 1fr));
    column-gap: {gap / 4}rem;
  ">
  <slot />
</div>
