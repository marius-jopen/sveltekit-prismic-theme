<script context="module">
	export const load = async ({ fetch }) => {
		try {
			const language = "en-gb"

			const res = await fetch('api/home', { // Path needs to be adjusted
				method: 'POST',
				body: JSON.stringify({
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

INDEX