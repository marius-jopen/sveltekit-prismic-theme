<script>
	import LayoutColumnLeft from '$lib/modulesStatic/items/layout/layoutColumn/LayoutColumnLeft.svelte'
	import LayoutColumnRight from '$lib/modulesStatic/items/layout/layoutColumn/LayoutColumnRight.svelte'
	import LayoutColumnMobile from '$lib/modulesStatic/items/layout/layoutColumn/LayoutColumnMobile.svelte'

	export let input
</script>

<div class="parent relative z-10">
	<div class="block w-full content">
		<div class="block md:hidden">
			<LayoutColumnMobile input={input} />
		</div>

		<div class="hidden md:block w-1/2 float-left relative h-full border-lines border-r">
			<LayoutColumnLeft input={input} />
		</div>

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