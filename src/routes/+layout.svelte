<script>
	import { base } from '$app/paths';
	import '../app.css';

	let { children } = $props();
</script>

<nav>
	<h1>EHMD28's Personal Website</h1>
	<div id="links">
		<h2><a href="{base}/">Home</a></h2>
		<h2><a href="{base}/projects">Projects</a></h2>
		<h2><a href="{base}/programs">Programs</a></h2>
	</div>
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		height: 10vh;
		position: sticky;
		top: 0;

		margin-bottom: 1.25rem;
		padding: 0 2.5rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: rgb(0, 0, 255);
	}

	nav > div#links {
		width: 30vw;

		display: flex;
		justify-content: space-around;
	}
</style>
