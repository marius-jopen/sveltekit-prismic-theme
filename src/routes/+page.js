export async function load ({ parent }) { // used to be `stuff`
	const data = await parent()

	return {
		...data
	}
}