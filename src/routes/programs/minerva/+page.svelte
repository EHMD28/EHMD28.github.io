<script lang="ts">
	import { GlobalFlashcards } from '$lib/minerva/data.svelte';
	import AddCardButton from '$lib/minerva/AddCardButton.svelte';
	import FlashCard from '$lib/minerva/FlashCard.svelte';
</script>

<h1>Minerva Study Tool</h1>
<p>
	Minerva is a flashcard study tool I created to help me study French. It is named after the Roman
	goddess of wisdom. You can add French vocabulary alongside the conjugations (for the verbs).
</p>

<div id="buttons-container">
	<button type="button">Test</button>
</div>

{#each GlobalFlashcards as flashcard}
	<FlashCard data={flashcard} />
{/each}
<AddCardButton />

<style>
	h1 {
		margin-bottom: 5vh;
	}

	button {
		width: 10vw;
		font-size: 16pt;
		padding: 2vh;
		margin: 2vh;
		color: black;
	}
</style>
