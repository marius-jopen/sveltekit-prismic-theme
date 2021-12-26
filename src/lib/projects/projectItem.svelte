<script>
    import Lazy from '$lib/addons/lazyload/lazy.svelte'
    export let project
</script>

<a sveltekit:prefetch href="/projects/{project.uid}" class="block relative w-full sm:w-1/3">
    <Lazy height={500} offset={200} fadeOption={{delay: 100, duration: 500}}>
        <img class="w-full object-cover h-70vw sm:h-40vw" src="{project.data.thumbnail.Small.url}" alt="{project.data.thumbnail.alt}">
    </Lazy>

    <div class="flex justify-center flex-col sm:opacity-0 hover:opacity-100 transition-opacity absolute left-0 top-0 w-full h-full">
		<div class="text-white text-center text-xl">
			{project.data.title[0].text}
		</div>
    </div>
</a>