<script>
	import { asText, asHTML, isFilled } from '@prismicio/helpers'

	export let field // A Prismic rich text field or a simple string
	export let inline = false
	export let plain = false
	export let classes = ""
	export let styles = ""
	export let prepend = ""
	export let append = ""
</script>

{#if $$slots.default}
  <div class="{classes}" style="{styles}">
    <slot />
  </div>
{:else}
  {#if isFilled.richText(field)}
    {#if plain}
      <div class:inline class="{classes}" style="{styles}">
        {`${prepend} `}{field[0].text}{` ${append}`}
      </div>
		{:else if inline}
      <div class:inline class="{classes}" style="{styles}">
        {`${prepend} `}{asText(field)}{` ${append}`}
      </div>
		{:else}
      <div class="{classes}" style="{styles}">
        {`${prepend} `}{@html asHTML(field)}{` ${append}`}
      </div>
		{/if}
	{:else if isFilled.field}
    <div class="{classes}" style="{styles}">
        {`${prepend} `}{field}{` ${append}`}
    </div>
  {/if}
{/if}