<script>
	import Saos from "saos"

	export let saos = 'slide-in-bottom 0.5s both'
	export let active = true
	export let styles =''
	export let classes =''
</script>

{#if active}
	<div class="{classes}" style="{styles}">
		<Saos animation={saos} >
			<slot />
		</Saos>
	</div>
{/if}

<style lang="postcss">
	.width-xs {
		@apply max-w-none md:max-w-xs mx-auto;
	}

	.width-sm {
		@apply max-w-none md:max-w-sm mx-auto;
	}

	.width-md {
		@apply max-w-none md:max-w-md mx-auto;
	}

	.width-lg {
		@apply max-w-none md:max-w-lg mx-auto;
	}

	.width-xl {
		@apply max-w-none md:max-w-xl mx-auto;
	}

	.width-2xl {
		@apply max-w-none md:max-w-2xl mx-auto;
	}

	.width-3xl {
		@apply max-w-none md:max-w-3xl mx-auto;
	}

	.width-4xl {
		@apply max-w-none md:max-w-4xl mx-auto;
	}

	.width-5xl {
		@apply max-w-none md:max-w-5xl mx-auto;
	}

	.width-6xl {
		@apply max-w-none md:max-w-6xl mx-auto;
	}

	.width-7xl {
		@apply max-w-none md:max-w-7xl mx-auto;
	}
</style>