<script context="module">
	export const load = async ({ fetch }) => {
		try {
			const res = await fetch('/api/project', {
				method: 'POST',
				body: JSON.stringify({ value: "betterfly" }),
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