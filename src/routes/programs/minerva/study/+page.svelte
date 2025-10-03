<script>
	import GenderClassificationQuestion from '$lib/minerva/question_types/NounGenderQuestion.svelte';
	import MultipleChoiceQuestion from '$lib/minerva/question_types/MultipleChoiceQuestion.svelte';
	import WrittenQuestion from '$lib/minerva/question_types/WrittenQuestion.svelte';
	import VerbConjugationQuestion from '$lib/minerva/question_types/VerbConjugationQuestion.svelte';
</script>

<h1>Study (Étudier)</h1>

<MultipleChoiceQuestion term="le chat" answer="cat" />
<WrittenQuestion term="le chat" answer="cat" />
<GenderClassificationQuestion term="le chat" answer="cat" />
<VerbConjugationQuestion term="parler" answer="parle" />

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
