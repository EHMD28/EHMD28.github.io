<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { base } from '$app/paths';
</script>

<nav
	class="flex h-20 w-screen items-center justify-between bg-blue-800 px-10 text-2xl text-gray-100"
>
	<h1><a href="{base}/">EHMD28's Personal Website</a></h1>
	<div class="space-between flex w-1/2 justify-between text-lg">
		<h2><a href="{base}/projects/c">C Projects</a></h2>
		<h2><a href="{base}/projects/java">Java Projects</a></h2>
		<h2><a href="{base}/projects/python">Python Projects</a></h2>
		<h2><a href="{base}/projects/rust">Rust Projects</a></h2>
		<h2><a href="{base}/projects/electronics">Electronics Projects</a></h2>
	</div>
</nav>

<main class="h-screen w-screen bg-gray-900">
	{@render children()}
</main>
