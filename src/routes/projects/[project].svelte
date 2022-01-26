<script context="module">
	export const load = async ({ fetch, page }) => {
		try {
			const pageName = page.params.project // Needs to be adjusted
			const language = "de-de"

			const res = await fetch('/api/project', {
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
	export let data
	console.log(data)
</script>

PROJECT