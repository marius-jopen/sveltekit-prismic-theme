<script>
	import { kebabCase } from '$lib/tools/functions/strings'
	import Container from '$lib/tools/container.svelte'

	export let categories
  export let category
	export let type
	export let itemClasses = 'bg-neutral-100 hover:text-black hover:bg-neutral-200 transition-colors px-6 py-0.5 rounded-xl'
  export let activeClass = 'bg-neutral-700 text-white'
</script>

<Container classesInner="pb-4">
	<div class="flex gap-2 pb-6 justify-center">
		<a
			href="/{type}"
			data-sveltekit-prefetch
			class="{itemClasses} {!category ? activeClass : ''}"
		>
			All
	</a>

		{#each categories as c}
			<a
				data-sveltekit-prefetch
				class="{itemClasses} {kebabCase(c.toLowerCase()) === category ? activeClass : ''}"
				href="?category={kebabCase(c.toLowerCase())}"
			>
				{c}
			</a>
		{/each}
	</div>
</Container>