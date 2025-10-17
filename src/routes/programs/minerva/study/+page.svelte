<script lang="ts">
	import { get_random_card } from '$lib/minerva/data.svelte.js';
	import QuestionComponent from '$lib/minerva/question_types/QuestionComponent.svelte';
	import {
		generate_random_question,
		new_question,
		PartOfSpeech,
		QuestionType,
		type Question
	} from '$lib/minerva/types';

	let question_one = new_question('le chat', 'cat', QuestionType.WRITTEN_FR_TO_EN);
	let question_two = new_question('le chat', 'cat', QuestionType.MULTIPLE_CHOICE_FR_TO_EN);

	let { data } = $props();
	/* `result` is an array of `FlashCardData`, and `error` is only assigned to if something goes wrong.
  Otherwise, it's undefined. */
	let { result, error } = data;
	const random_card = result[Math.floor(Math.random() * result.length)];
	const question_zero = generate_random_question(random_card);
</script>

<h1>Study (Étudier)</h1>

<QuestionComponent data={question_zero} />

<!-- <QuestionComponent data={question_one} />
<QuestionComponent data={question_two} /> -->

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
