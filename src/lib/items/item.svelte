<script>
    import Lazy from '$lib/addons/lazyload/lazy.svelte'
    export let item
</script>

<a sveltekit:prefetch href="/projects/{item.uid}" class="block relative w-full sm:w-1/3">
    <Lazy height={500} offset={200} fadeOption={{delay: 100, duration: 500}}>
        <img class="w-full object-cover h-70vw sm:h-40vw" src="{item.data.thumbnail.Small.url}" alt="{item.data.thumbnail.alt}">

		<div class="flex justify-center flex-col sm:opacity-0 hover:opacity-100 transition-opacity absolute left-0 top-0 w-full h-full">
			<div class="text-white text-center text-xl">
				{item.data.title[0].text}
			</div>
		</div>
	</Lazy>
</a>