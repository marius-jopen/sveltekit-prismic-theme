<script>
	import Saos from "saos"

	export let pt = 'pt-4'
	export let pb = 'pb-4'
	export let px = 'px-8'
	export let width = 'width-empty'
	export let saos = 'slide-in-bottom 0.5s both'
	export let active = true
	export let classes =''
</script>

{#if active}
	<div class="{pt} {pb} {classes}">
		<Saos animation={saos} >
			<div class=" {width == 'screen' ? '' : width + ' ' + px} mx-auto">
				<slot />
			</div>
		</Saos>
	</div>
{/if}

<style lang="postcss">
	.width-empty {
		@apply max-w-none;
	}

	.width-xs {
		@apply max-w-none md:max-w-xs;
	}

	.width-sm {
		@apply max-w-none md:max-w-sm;
	}

	.width-md {
		@apply max-w-none md:max-w-md;
	}

	.width-lg {
		@apply max-w-none md:max-w-lg;
	}

	.width-xl {
		@apply max-w-none md:max-w-xl;
	}

	.width-2xl {
		@apply max-w-none md:max-w-2xl;
	}

	.width-3xl {
		@apply max-w-none md:max-w-3xl;
	}

	.width-4xl {
		@apply max-w-none md:max-w-4xl;
	}

	.width-5xl {
		@apply max-w-none md:max-w-5xl;
	}

	.width-6xl {
		@apply max-w-none md:max-w-6xl;
	}

	.width-7xl {
		@apply max-w-none md:max-w-7xl;
	}
</style>