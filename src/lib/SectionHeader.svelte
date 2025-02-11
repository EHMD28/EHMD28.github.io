<script lang="ts">
	let { title, link } = $props();
	// import "../.."
</script>

<div>
	<h1 class="py-10 text-center align-middle text-4xl text-gray-100">
		<a href={link}>{title}</a>
	</h1>
</div>
