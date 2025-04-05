<script>
	import { base } from '$app/paths';
	import '../app.css';

	let { children } = $props();
</script>

<nav>
	<h1>EHMD28's Personal Website</h1>
	<div id="links">
		<h2><a href="{base}/">Home</a></h2>
		<div id="dropdown-container">
			<h2 id="dropdown-label">Projects</h2>
			<div id="dropdown-content">
				<h3><a href="{base}/projects/c">C</a></h3>
				<h3><a href="{base}/projects/electronics">Electronics</a></h3>
				<h3><a href="{base}/projects/java">Java</a></h3>
				<h3><a href="{base}/projects/kotlin">Kotlin</a></h3>
				<h3><a href="{base}/projects/python">Python</a></h3>
				<h3><a href="{base}/projects/rust">Rust</a></h3>
			</div>
		</div>
	</div>
</nav>

<main>
	{@render children()}
</main>

<style>
	#dropdown-container {
		position: relative;
		display: inline-block;
	}

	#dropdown-content {
		display: none;
		background-color: rgb(0, 0, 75);
		padding: 5px;
		position: absolute;
		z-index: 1;
	}

	#dropdown-content > h3:hover {
		background-color: rgb(0, 0, 160);
	}

	#dropdown-content > h3 {
		padding: 0.5rem;
	}

	#dropdown-container:hover #dropdown-content {
		display: block;
	}
</style>
