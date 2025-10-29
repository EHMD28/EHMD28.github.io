<script lang="ts">
	import { base } from '$app/paths';
	import AddCardButton from '$lib/minerva/components/AddCardButton.svelte';
	import FlashCard from '$lib/minerva/components/FlashCard.svelte';
	import Navigator from '$lib/minerva/components/ui/Navigator.svelte';
	import type { PageProps } from './$types';

	/* `result` is an array of `FlashCardData`, and `error` is only assigned to if something goes wrong.
  	Otherwise, it's undefined. */
	const { data }: PageProps = $props();
	const { result: flash_cards, error } = data;
	const tags = flash_cards.map((v) => v.tags).flat();
</script>

<h1>Minerva Study Tool</h1>
<p>
	Minerva is a flashcard study tool I created to help me study French. It is named after the Roman
	goddess of wisdom. You can add French vocabulary alongside the conjugations (for the verbs).
</p>

<Navigator />
<!-- <div id="controls-container">
	<a href="{base}/programs/minerva/study">Study</a>
	<a href="{base}/programs/minerva/test">Test</a>
</div> -->

<div id="flashcards-container">
	{#each flash_cards as flash_card}
		<FlashCard {flash_card} {flash_cards} {tags} />
	{/each}
</div>

<AddCardButton {flash_cards} />

<style>
	h1 {
		margin-bottom: 5vh;
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
