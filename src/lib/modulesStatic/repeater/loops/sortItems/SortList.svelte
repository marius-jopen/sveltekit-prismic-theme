<script>
	export let items
	export let type

	function filter(origin) {
		console.log(origin)
	}
</script>

<div class="flex border-lines border-b w-full text-xl py-3 px-4 uppercase">
	<div class="w-1/2 flex" on:click={e => filter("title")}>
		<div>
			Title
		</div>

		<div class="pl-2">
			Up
		</div>
	</div>

	<div class="w-1/2 flex" on:click={e => filter("sub_title")}>
		<div>
			Sub Title
		</div>

		<div class="pl-2">
			Up
		</div>
	</div>
</div>