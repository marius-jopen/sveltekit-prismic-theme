<script>
  export let start
  export let span
	export let background
	export let fullWidth
	export let paddingTop
	export let paddingBottom
	export let px
</script>

<div
	class="{background} {fullWidth == true ? '' : 'col-span-full'}"
	style="
		{fullWidth == true ? `grid-column:${start}/ span ${span};` : `margin: 0 -${px / 4}rem;`}
		padding-top:{paddingTop / 4}rem;
		padding-bottom:{paddingBottom / 4}rem;
		">
	<slot />
</div>