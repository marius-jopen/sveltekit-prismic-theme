<script>
	// Import child components which are used in this module
    export let item
	export let type

    // Play and pause function
    function playVideo(e) {
        e.target.play()
    }

    function pauseVideo(e) {
        e.target.pause()
    }
</script>

<a sveltekit:prefetch href="/{type}s/{item.uid}" class="block w-1/2 sm:w-1/3 uppercase border-b border-lines">
	<!-- Video -->
    <video class="h-100vw sm:h-auto object-cover w-full border-b border-lines" on:mouseenter="{e => playVideo(e)}" on:mouseleave="{e => pauseVideo(e)}" poster="{item.data.preview_video_poster.Medium.url}" muted loop playsinline>
        <source src={item.data.preview_video_link[0].text} type="video/mp4" />
	    Your browser does not support the video tag.
    </video>

	<div class="text-left text-lg px-3 py-1.5">
        {item.data.title[0].text}
    </div>
</a>