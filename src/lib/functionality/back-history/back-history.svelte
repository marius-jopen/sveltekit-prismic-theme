<script>
	// Function which goes back to the previous visited page
	function back() {
		history.back()
	}
</script>

<div class="cursor-pointer" on:mousedown={back}>
	Back
</div>