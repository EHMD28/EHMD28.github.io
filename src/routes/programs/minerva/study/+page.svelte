<script lang="ts">
	import { NounGender, PartOfSpeech, type FlashCardData } from '$lib/minerva/scripts/types';

	let { data } = $props();
	/* `result` is an array of `FlashCardData`, and `error` is only assigned to if something goes wrong.
  Otherwise, it's undefined. */
	let { result, error } = data;
	const questions: FlashCardData[] = [];

	/* Random card/question for testing. */
	// const random_card = result[Math.floor(Math.random() * result.length)];
	// const random_question = generate_random_question(random_card);
	/* Mock card/question for testing */
	const mock_noun: FlashCardData = {
		term: 'le chat',
		definition: 'cat',
		noun_gender: NounGender.MALE,
		term_type: PartOfSpeech.NOUN,
		verb_conjugations: undefined,
		adjective_forms: undefined,
		tags: []
	};
</script>

<h1>Study (Étudier)</h1>

<!-- <QuestionComponent question={random_question} card={random_card} /> -->

<!-- <QuestionComponent data={question_one} />
<QuestionComponent data={question_two} /> -->

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
