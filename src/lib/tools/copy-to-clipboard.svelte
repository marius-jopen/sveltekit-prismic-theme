<script>
	// Import from parent
	export let copyText // Text which gets copied. For example an email
	export let buttonText // Text of the button

	function handleFailedCopy() {
		buttonText = 'Not safed to Clipboard!'

		// Jump back after 3 seconds to show old text again
		setTimeout(() => {
			buttonText = copyText
		}, 3000);
	}

	function handleSuccessfullyCopied() {
		buttonText = 'Safed to Clipboard!'

		// Jump back after 3 seconds to show old text again
		setTimeout(() => {
			buttonText = copyText
		}, 3000);
	}
</script>

<ToolCopyToClipboard text={copyText} on:copy={e => handleSuccessfullyCopied()} on:fail={e => handleFailedCopy()} let:copy>
	<button on:click={copy}>
		{buttonText}
	</button>
</ToolCopyToClipboard>