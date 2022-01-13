<script>
    import Lazy from '$lib/addons/lazyload/lazy.svelte'

    export let slice
</script>

<Lazy height={500} offset={200} fadeOption={{delay: 100, duration: 500}}>
    <video class="border-b border-lines" playsinline poster="{slice.primary.preview_image.Big.url}" autoplay loop muted>
        <source src={slice.primary.video.url} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</Lazy>
