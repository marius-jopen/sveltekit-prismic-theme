<script context="module">
	export const load = async ({ fetch, page }) => {
		try {
			const pageName = page.params.product // Needs to be adjusted
			const language = "en-gb"

			const res = await fetch('../api/product', { // Path needs to be adjusted
				method: 'POST',
				body: JSON.stringify({
					slug: pageName,
					lang: language
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})

			const data = await res.json()

			return {
				props: {
					data,
				},
			}
		} catch (err) {
			console.error(err)
		}
	}
</script>

<script>
	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple.svelte'
	import ParagraphRichtext from '$lib/modulesFlex/paragraphs/ParagraphRichtext.svelte'

	export let data

	console.log(data)
</script>

<HeadlineSimple inputHeadline={data.product.title[0].text} />
<ParagraphRichtext inputParagraph={data.product.description} inputTextAlignment={"text-left"}/>