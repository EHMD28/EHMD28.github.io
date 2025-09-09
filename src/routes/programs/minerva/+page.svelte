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
	<button type="button">Study</button>
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

	#buttons-container > button {
		width: 8vw;
		font-size: 16pt;
		margin: 2vh;
		color: black;
	}

	#buttons-container > button:hover {
		background: black;
		color: blue;
		border: 2px solid blue;
		cursor: pointer;
	}
</style>
