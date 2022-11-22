<script>
	import Text from '$lib/prismic/atoms/text.svelte'
	import * as animateScroll from "svelte-scrollto";
	import { headerHeight } from '$lib/prismic/functionality/stores'

	export let input

	let height = 64

	headerHeight.subscribe(value => {
		height = value
	})

	function scrollToContent(index) {
		animateScroll.scrollTo({element: '.index-' + index, offset: -height})
	}
</script>

<div class="parent relative z-10 hidden sm:block">
	<div class="block w-full content">

		<div class="right-box w-3/12 float-left sm:sticky border-lines-1 border-r" style="top: {height}px;">
			<div class="px-4 py-3">
				{#each input as item, index}
					<div class="p1 text-xs pb-2.5 cursor-pointer" on:click="{e => scrollToContent(index)}">
						<Text plain field={item.title_text_list} />
					</div>
				{/each}
			</div>
		</div>

		<div class="w-9/12 float-left relative h-full">
			{#each input as item, index}
				<div class="uppercase px-4 h-8 border-b border-lines-1 flex justify-center text-center flex-col w-full index-{index}" id="index-"{index}>
						<Text plain field={item.title_text_list} />
				</div>

				<Text field={item.text_text_list} classes="pt-4 pb-4 px-8 border-b border-lines-1" />
			{/each}
		</div>

	</div>

	<div class="border-lines-1 border-b w-full mt-[-1px]" />
</div>

<style lang="postcss">
	.parent {
		min-height: 100vh;
	}

	.content:after {
		content: "";
		display: table;
		clear: both;
	}

	.right-box {
		min-height: 100vh;
	}

	@media screen and (max-width: 640px) {
		.right-box {
			min-height: 0px;
		}
	}
</style>