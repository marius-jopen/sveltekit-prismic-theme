<script>
  export let start
  export let span
	export let background
	export let fullWidth = false
	export let paddingTop
	export let paddingBottom
	export let px
</script>

<div
	class="{background} text-xs {fullWidth ? 'col-span-full' : ''}"
	style="
		{fullWidth ? `margin: 0 -${px / 4}rem;` : ''}
		padding-top:{paddingTop / 4}rem;
		grid-column:{start}/ span {span};
		padding-bottom:{paddingBottom / 4}rem;
		">
	<slot />
</div>


