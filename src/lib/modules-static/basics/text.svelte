<script>	
    // Import function which helps to display the richtext which we receive from Prismic
	import PrismicDom from 'prismic-dom'

    // Get data from parent 
    export let text
    export let hasRichtext
    export let classes
    export let classesRichtext
</script>

{#if hasRichtext == true}
    <div class="{classesRichtext}">
    {@html PrismicDom.RichText.asHtml(text)}
    </div>
{/if}

{#if hasRichtext == false || hasRichtext == undefined}
    <div class="{classes}">
        {text}
    </div>
{/if}