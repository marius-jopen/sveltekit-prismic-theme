<script>
	import { asText, asHTML, isFilled } from '@prismicio/helpers'

	export let field // A Prismic rich text field or a simple string
	export let inline = false
	export let classes = ""
	export let prepend = ""
	export let append = ""
</script>

{#if $$slots.default}
  <div class="{classes}">
    <slot />
  </div>
{:else}
  {#if isFilled.richText(field)}
    {#if inline}
      <div class:inline class="{classes}">
        {`${prepend} `}{asText(field)}{` ${append}`}
      </div>
		{:else}
      <div class="{classes}">
        {`${prepend} `}{@html asHTML(field)}{` ${append}`}
      </div>
		{/if}
	{:else}
    <div class="{classes}">
        {`${prepend} `}{field}{` ${append}`}
    </div>
  {/if}
{/if}