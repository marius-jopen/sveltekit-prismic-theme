<script>
	import Link from "$lib/prismic/atoms/link.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import LayoutAccordeon1 from "$lib/tools/accordeon/accordeon-1.svelte"

	export let document
	export let closeAccordeonToggle = false

	const documentIndexed = []
	const navigation = []
	const children = []
	let parentCount = 0
	let object

	// Creates an array in which the parents and children have an ID so we can find them later
	document.forEach(function (item) {
		if(item.status == 'normal') {
			documentIndexed.push(item);
		}

		if(item.status == 'parent') {
			documentIndexed.push(item)
			item.parent = parentCount
			parentCount = parentCount + 1
		}

		if(item.status == 'child') {
			documentIndexed.push(item)
			item.child = parentCount - 1
		}
	})

	// Creates an array with only normal links and parents. No children
	documentIndexed.forEach(function (item) {
		if(item.status == 'normal') {
			navigation.push(item);
		}

		if(item.status == 'parent') {
			navigation.push(item)
			item.children = []
		}
	})

	// Creates an extra array just for the children. Save the children!
	documentIndexed.forEach(function (item) {
		if(item.status == 'child') {
			children.push(item)
		}
	})

	// Pushes the chldren into the "navigation" array in under the matching parent
	children.forEach(function (item) {
		for (let step = 0; step < parentCount; step++) {
			if(item.child == step) {
				object = navigation.find(o => o.parent === step)
				object.children.push(item)
			}
		}
	})

	function closeAccordeon() {
		if(closeAccordeonToggle == false) {
			closeAccordeonToggle = true
		} else {
			closeAccordeonToggle = false
		}
	}
</script>

<div class="flex flex-col">
	{#each navigation as item}
		{#if item.status == 'normal'}
			<div class="w-full flex flex-row justify-center" on:click={closeAccordeon} >
				<Link activeClass='' document={item.link} classes="rounded-full bg-white hover:bg-gradient-to-r from-red-200 to-blue-200 px-8 py-0.5 shadow-md inline-block mb-4" >
					<Text inline field={item.title} />
				</Link>
			</div>
		{/if}

		{#if item.status == 'parent'}
			<LayoutAccordeon1 inputHeadline={item.title} >
				{#each item.children as i}
					<div class="w-full flex flex-row justify-center" on:click={closeAccordeon} >
						<Link activeClass='' document={i.link} classes="shadow-md rounded-full bg-white hover:bg-gradient-to-r from-red-200 to-blue-200 px-6 py-0.5 inline-block mb-4" >
							<Text inline field={i.title} />
						</Link>
					</div>
				{/each}
			</LayoutAccordeon1>
		{/if}
	{/each}
</div>