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


<!-- <div
	class="{background} text-xs text-center"
	style="
		padding-top:{paddingTop / 4}rem;
		grid-column:{start}/ span {span};
		padding-bottom:{paddingBottom / 4}rem;
		">
	{text}
</div> -->
