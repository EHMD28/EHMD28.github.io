<script lang="ts">
	import QuestionComponent from '$lib/minerva/components/question_types/QuestionComponent.svelte';
	import {
		MOCK_ADJECTIVE_CARD,
		MOCK_ADJECTIVE_WRITTEN_QUESTION,
		MOCK_NOUN_CARD,
		MOCK_NOUN_WRITTEN_EN_TO_FR_QUESTION,
		MOCK_NOUN_WRITTEN_FR_TO_EN_QUESTION,
		MOCK_VERB_CARD,
		MOCK_VERB_WRITTEN_QUESTION
	} from '$lib/minerva/scripts/mock_data.js';
	import type { FlashCardData } from '$lib/minerva/scripts/types.js';
	let { data } = $props();
	/* `result` is an array of `FlashCardData`, and `error` is only assigned to if something goes wrong.
  Otherwise, it's undefined. */
	let { result, error } = data;
	const questions: FlashCardData[] = [];
</script>

<h1>Study (Étudier)</h1>
<QuestionComponent question={MOCK_NOUN_WRITTEN_EN_TO_FR_QUESTION} card={MOCK_NOUN_CARD} />
<QuestionComponent question={MOCK_NOUN_WRITTEN_FR_TO_EN_QUESTION} card={MOCK_NOUN_CARD} />
<QuestionComponent question={MOCK_VERB_WRITTEN_QUESTION} card={MOCK_VERB_CARD} />
<QuestionComponent question={MOCK_ADJECTIVE_WRITTEN_QUESTION} card={MOCK_ADJECTIVE_CARD} />

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
