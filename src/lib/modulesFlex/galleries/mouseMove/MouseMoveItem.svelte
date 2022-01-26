<script>
    export let item
    export let itemWidthVirtual
</script>

<div style="width: {itemWidthVirtual}vw" class="block border-r border-lines">
    <img src="{item.image.Medium.url}" alt="{item.image.alt}" style="width: {itemWidthVirtual}vw; height: {itemWidthVirtual}vw;" class="object-cover">
</div>