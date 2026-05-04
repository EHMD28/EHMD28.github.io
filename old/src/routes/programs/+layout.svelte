<script>
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<title>Programs</title>
</svelte:head>

{@render children()}
