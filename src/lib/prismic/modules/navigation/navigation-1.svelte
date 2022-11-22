<script>
	import Link from "$lib/prismic/atoms/link.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import LayoutAccordeon1 from "$lib/tools/accordeon/accordeon-1.svelte"

	export let document

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
</script>

<div class="flex flex-col">
	{#each navigation as item}
		{#if item.status == 'normal'}
			<Link document={item.link}>
				<Text inline field={item.title} />
			</Link>
		{/if}

		{#if item.status == 'parent'}
			<LayoutAccordeon1 inputHeadline={item.title} >
				{#each item.children as i}
					<Link document={i.link}>
						<Text inline field={i.title} />
					</Link>
				{/each}
			</LayoutAccordeon1>
		{/if}
	{/each}
</div>