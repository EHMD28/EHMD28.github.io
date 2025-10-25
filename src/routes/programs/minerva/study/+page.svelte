<script lang="ts">
	import MockQuestions from '$lib/minerva/components/testing/MockQuestions.svelte';
	import type { FlashCardData } from '$lib/minerva/scripts/types.js';
	let { data } = $props();
	/* `result` is an array of `FlashCardData`, and `error` is only assigned to if something goes wrong.
  Otherwise, it's undefined. */
	let { result: flash_cards, error } = data;
	const questions: FlashCardData[] = [];
</script>

<h1>Study (Étudier)</h1>
<MockQuestions {flash_cards} />

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
