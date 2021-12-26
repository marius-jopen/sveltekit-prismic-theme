<script>
    import Lazy from '$lib/addons/lazyload/lazy.svelte';
    export let slice
</script>

<Lazy height={500} offset={200} fadeOption={{delay: 0, duration: 500}}>
    <img class="border-b border-lines" src="{slice.primary.image.Big.url}" alt="{slice.primary.image.alt}">
</Lazy>