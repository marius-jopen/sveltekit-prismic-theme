<script>
  import Text from "$lib/prismic/atoms/text.svelte"
	import Link from "$lib/prismic/atoms/link.svelte"

  export let data

  const { document } = data
</script>

<div class="relative">
	<div class="flex justify-center w-full">
		<div class="button-1 mt-6">
			<Text classes="h4 text-center" plain field={document.data.title} />
		</div>
	</div>

	<div class="absolute left-4 top-4">
		<Link href={'/glossary'} classes="rounded-full px-8 py-2 shadow-lg text-xs flex gap-4">
			<div>
				{"<"}
			</div>

			<div>
				Zur Übersicht
			</div>
		</Link>
	</div>
</div>

<Text classes="px-4 py-8" field={document.data.description} />

<style lang="postcss">
	.button-1 {
		@apply w-fit bg-gradient-to-r from-red-200 to-blue-200 rounded-full px-8 py-2;
	}
</style>