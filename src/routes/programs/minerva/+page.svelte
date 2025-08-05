<script lang="ts">
	import { global_flashcards } from '$lib/data.svelte';
	import AddCardButton from '$lib/minerva/AddCardButton.svelte';
	import FlashCard from '$lib/minerva/FlashCard.svelte';
</script>

<h1>Minerva Study Tool</h1>
<p>
	Minerva is a flashcard study tool I created to help me study French. It is named after the Roman
	goddess of wisdom. You can add French vocabulary alongside the conjugations (for the verbs).
</p>

{#each global_flashcards as { term, term_type, defintion, gender, conjugations }}
	<FlashCard {term} {term_type} {defintion} {gender} {conjugations} />
{/each}
<AddCardButton />

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
