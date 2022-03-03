<script>
	// Import child components which are used in this module
	import LayoutColumnLeft from '$lib/modules-static/layouts/layout-column/layout-column-left.svelte'
	import LayoutColumnRight from '$lib/modules-static/layouts/layout-column/layout-column-right.svelte'
	import LayoutColumnMobile from '$lib/modules-static/layouts/layout-column/layout-column-mobile.svelte'

	// Get data from parent component
	export let input
</script>

<div class="parent relative z-10 bg-white">
	<div class="block w-full content">
		<!-- Mobile -->
		<div class="block md:hidden">
			<LayoutColumnMobile input={input} />
		</div>

		<!-- Left -->
		<div class="hidden md:block w-1/2 float-left relative h-full border-lines border-r">
			<LayoutColumnLeft input={input} />
		</div>

		<!-- Right -->
		<div class="right-box md:w-1/2 float-left sm:sticky">
			<LayoutColumnRight input={input} />
		</div>
	</div>

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>


<style lang="postcss">
	.parent {
		min-height: 100vh;
	}

	.content:after {
		content: "";
		display: table;
		clear: both;
  	}

	.right-box {
		min-height: 100vh;
		top: 52px;
	}

	@media screen and (max-width: 640px) {
		.right-box {
			min-height: 0px;
		}
	}
</style>