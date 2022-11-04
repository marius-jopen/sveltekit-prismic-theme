<script>
  import { page } from '$app/stores';
	import Container from "$lib/tools/container.svelte"
</script>

<Container classes="text-center">
	{$page.status}: {$page.error.message}
</Container>