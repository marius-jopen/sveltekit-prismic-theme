onMount(() => {
	const glossary = document.querySelectorAll('.glossary')

	console.log(glossary)

	if(glossary.length) {

		// Create divs
		glossary.forEach(function (element, index) {
			// Set uid
			let titleId = index
			let title = element.outerText
			let content = 'Content text! Content text! Content text! Content text! Content text!'

			// Find matching glossary div in text
			const glossaryLabel = document.getElementsByClassName('glossary')[index]

			// Create parent div which will be used for each tooltip and give it an ID
			const elementBox = document.createElement('div')
			elementBox.setAttribute('id', titleId)
			elementBox.classList.add('glossary-popup')
			glossaryLabel.appendChild(elementBox)
			const parentDiv = document.getElementById(titleId)

			// Create title div and apply it to parent div
			const elementTitle = document.createElement('div')
			elementTitle.classList.add('title')
			elementTitle.textContent = title
			parentDiv.appendChild(elementTitle)

			// Create content div and apply it to parent div
			const elementContent = document.createElement('div')
			elementContent.classList.add('content')
			elementContent.textContent = content
			parentDiv.appendChild(elementContent)

		})
	}
});