<script lang="ts">
	import { base } from '$app/paths';
</script>

<nav id="controls-container">
	<a href="{base}/programs/minerva">Edit</a>
	<a href="{base}/programs/minerva/study">Study</a>
	<a href="{base}/programs/minerva/test">Test</a>
</nav>

<style>
	#controls-container {
		margin-left: 1vw;
	}

	#controls-container > a {
		width: 8vw;
		font-size: 20pt;
		margin-right: 2vw;
	}

	#controls-container > a:hover {
		color: rgb(0, 89, 255);
		text-decoration: none;
	}
</style>
