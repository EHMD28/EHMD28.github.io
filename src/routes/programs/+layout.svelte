<script>
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<title>Minerva Study Tool</title>
</svelte:head>

{@render children()}
