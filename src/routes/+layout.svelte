<script lang="ts">
	import { resolve } from "$app/paths";
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	import "../themes/dark.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="dark">
	<h1>EHMD28 Personal Website</h1>
	<div>
		<a href={resolve("/")}>Home</a>
		<a href={resolve("/about")}>Projects</a>
		<a href={resolve("/programs")}>Programs</a>
		<a href={resolve("/projects")}>About</a>
	</div>
</nav>
<main>
	{@render children()}
</main>

<style>
	nav {
		background-color: var(--md-sys-color-primary-container);
		color: var(--md-sys-color-on-primary-container);
	}
</style>
