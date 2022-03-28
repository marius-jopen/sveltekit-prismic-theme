export function getSession ({ request, url }) {
	const previewToken = url.searchParams.get("token")
	const documentId = url.searchParams.get("documentId")
	const cookie = request.headers.get('cookie')

	return {
		cookie,
		previewToken,
		documentId
	}
}