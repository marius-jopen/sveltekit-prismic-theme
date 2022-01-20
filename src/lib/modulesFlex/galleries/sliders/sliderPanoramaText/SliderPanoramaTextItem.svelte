<script>
    export let item

	let videoUrl = item.video.url

	if(item.video_source[0]) {
		videoUrl = item.video_source[0].text
	}
</script>

<div class="h-full">
	<a href="{item.link.url}" target="{item.link.target}">
		{#if videoUrl }
			<video muted playsinline autoplay loop poster="{item.image.Big.url}" class="w-full h-40vw object-cover border-lines border-b">
				<source src={videoUrl} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		{:else}
			<img src="{item.image.Big.url}" alt="{item.image.alt}" class="w-full h-40vw object-cover border-lines border-b">
		{/if}
	</a>

	{#if item.caption[0]}
		<div class="py-4 px-4 text-center text-2xl">
			{item.caption[0].text}
		</div>
	{/if}
</div>