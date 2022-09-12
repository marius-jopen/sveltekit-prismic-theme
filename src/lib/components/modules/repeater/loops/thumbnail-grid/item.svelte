<script>
  import Text from "$lib/components/atoms/text.svelte"
  import Image from "$lib/components/atoms/image.svelte"
  import Link from "$lib/components/atoms/link.svelte"
	// Import child components which are used in this module
  export let item
	// export let type
</script>

<Link document={item.selected} classes="block relative w-full sm:w-1/3 border-b border-r border-lines" >
  <Image field={item.selected.data.preview_image} fixedSize="Small" classes="w-full object-cover h-70vw sm:h-40vw" />

  <div class="flex justify-center flex-col sm:opacity-0 hover:opacity-100 transition-opacity absolute left-0 top-0 w-full h-full">
		<div class="text-white text-center text-2xl px-8">
			
		</div>
	</div>
</Link>