<script lang="ts">
	import { new_question, QuestionType } from '$lib/minerva/types';

	// import GenderClassificationQuestion from '$lib/minerva/question_types/NounGenderQuestion.svelte';
	// import MultipleChoiceQuestion from '$lib/minerva/question_types/MultipleChoiceQuestion.svelte';
	// import WrittenQuestionTemplate from '$lib/minerva/question_types/WrittenQuestionTemplate.svelte';

	let question_one = new_question('le chat', 'cat', QuestionType.WRITTEN_FR_TO_EN);
</script>

<h1>Study (Étudier)</h1>

<!-- <MultipleChoiceQuestion term="le chat" answer="cat" />
<WrittenQuestionTemplate prompt="Translate" term="le chat" answer="cat" />
<GenderClassificationQuestion term="le chat" answer="cat" />
<WrittenQuestionTemplate prompt="Conjugate with il/elle" term="parler" answer="parle" />
<WrittenQuestionTemplate prompt="Female form of" term="petit" answer="petite" /> -->

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
