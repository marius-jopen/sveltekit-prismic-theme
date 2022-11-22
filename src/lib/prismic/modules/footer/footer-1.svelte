<script>
	import Navigation from "$lib/prismic/modules/navigation/navigation.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let setup
</script>

<footer class="border-t border-lines-1 mt-[-2px] sm:mt-[-1px] block bg-white ">
	<div class=" flex-col-reverse sm:flex-row flex justify-between py-2 px-4 p1 text-xs pt-2.5 sm:pt-[7.5px] pb-4 sm:pb-0 sm:h-8 text-center sm:text-start">
		<div class="flex-col sm:flex-row flex gap-3 text-xs">
			<Navigation document={setup.data.navigation_footer} />
		</div>

		<div class="sm:normal-case pb-6 sm:pb-0">
			<Text plain field={setup.data.title} />
		</div>
	</div>
</footer>