<script lang="ts">
	import { base } from '$app/paths';
	import AddCardButton from '$lib/minerva/components/AddCardButton.svelte';
	import FlashCard from '$lib/minerva/components/FlashCard.svelte';
	import { GlobalFlashcards } from '$lib/minerva/scripts/data.svelte';
</script>

<h1>Minerva Study Tool</h1>
<p>
	Minerva is a flashcard study tool I created to help me study French. It is named after the Roman
	goddess of wisdom. You can add French vocabulary alongside the conjugations (for the verbs).
</p>

<div id="controls-container">
	<a href="{base}/programs/minerva/study">Study</a>
	<a href="{base}/programs/minerva/test">Test</a>
</div>

<div id="flashcards-container">
	{#each GlobalFlashcards as flashcard}
		<FlashCard data={flashcard} />
	{/each}
</div>

<AddCardButton />

<style>
	h1 {
		margin-bottom: 5vh;
	}

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

	#flashcards-container {
		margin-top: 2.5vh;
	}

	/* #controls-container > button:hover {
		background: black;
		color: blue;
		border: 2px solid blue;
		cursor: pointer;
	} */
</style>
