<script lang="ts">
	import type { VerbConjugations } from '$lib/minerva/types';

	let { conjugations }: { conjugations: VerbConjugations } = $props();
</script>

<div id="conjugations-container">
	<label for="je-conj">Je</label>
	<input type="text" name="je-conj" id="je-conj" bind:value={conjugations.je} />
	<label for="tu-conj">Tu</label>
	<input type="text" name="tu-conj" id="tu-conj" bind:value={conjugations.tu} />
	<label for="il-conj">Il/Elle</label>
	<input type="text" name="il-conj" id="il-conj" bind:value={conjugations.il} />
	<label for="vous-conj">Vous</label>
	<input type="text" name="vous-conj" id="vous-conj" bind:value={conjugations.vous} />
	<label for="nous-conj">Nous</label>
	<input type="text" name="nous-conj" id="nous-conj" bind:value={conjugations.nous} />
	<label for="ils-conj">Ils/Elles</label>
	<input type="text" name="ils-conj" id="ils-conj" bind:value={conjugations.ils} />
</div>

<style>
	#conjugations-container {
		display: grid;
		grid-template-columns: 5% 20%;
	}

	#conjugations-container > label,
	#conjugations-container > input {
		margin-bottom: 10px;
	}

	#conjugations-container > input {
		color: black;
		padding: 0 5px;
	}
</style>
