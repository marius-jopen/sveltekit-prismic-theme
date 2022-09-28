<script>
  export let gap
  export let columns
  export let px
</script>

<div
  class="grid"
  style="
    grid-template-columns: repeat({columns}, minmax(0, 1fr));
    padding: 0 {px / 4}rem;
    column-gap: {gap / 4}rem;
  ">
  <slot />
</div>
