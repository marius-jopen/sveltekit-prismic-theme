<script>
	import Link from "$lib/prismic/atoms/link.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import LayoutAccordeon1 from "$lib/tools/layout-accordeon-1.svelte"

	export let document

	const documentIndexed = []
	const navigation = []
	const children = []
	let parentCount = 0
	let object

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

	documentIndexed.forEach(function (item) {
		if(item.status == 'normal') {
			navigation.push(item);
		}

		if(item.status == 'parent') {
			navigation.push(item)
			item.children = []
		}
	})

	documentIndexed.forEach(function (item) {
		if(item.status == 'child') {
			children.push(item)
		}
	})

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