<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Footer from "$lib/components/main/Footer.svelte";
	import Navbar from "$lib/components/main/Navbar.svelte";
	import "../app.css";
	import "../themes/dark.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<main class="dark">
	{@render children()}
</main>
<Footer />

<style>
	main {
		flex: 1 0 auto;

		padding: 5vh 2.5vw;

		background-color: var(--md-sys-color-surface);
		color: var(--md-sys-color-on-surface);
	}
</style>
