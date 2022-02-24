<script>
    // Import safe to clipboard function
    import CopyToClipboard from "svelte-copy-to-clipboard"

    // Import from parent
    export let copyText // Text which gets copied. For example an email
    export let buttonText // Text of the button

    const handleFailedCopy = (e) => {
        buttonText = 'Not safed to Clipboard!'
    }

    function handleSuccessfullyCopied(e) {
        buttonText = 'Safed to Clipboard!'
    }
</script>

<CopyToClipboard text={copyText} on:copy={e => handleSuccessfullyCopied(e)} on:fail={e => handleFailedCopy(e)} let:copy>
    <button on:click={copy}>
        {buttonText}
    </button>
</CopyToClipboard>