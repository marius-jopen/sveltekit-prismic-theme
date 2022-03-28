<script>
    // Get data from parent Component
    export let item
    export let itemWidthVirtual
</script>

<div style="width: {itemWidthVirtual}vw" class="block border-r border-lines">
    <img src="{item.slider_mouse_move_image.Big.url}" alt="{item.slider_mouse_move_image.alt}" style="width: {itemWidthVirtual}vw; height: {itemWidthVirtual}vw;" class="object-cover">
</div>