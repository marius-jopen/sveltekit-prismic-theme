<script context="module">
	export const load = async ({ fetch, page }) => {
		try {
			const language = "en-gb"

			const currentTag = page.params.category.replace("-", ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

			const res = await fetch('../../api/projects-category', { // Path needs to be adjusted
				method: 'POST',
				body: JSON.stringify({
					tag: currentTag,
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
	export let data

	data = data.allProjects.edges

	console.log(data)
</script>

CATEGORY