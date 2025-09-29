<script>
	import MultipleChoiceQuestion from '$lib/minerva/question_types/MultipleChoiceQuestion.svelte';
	import WrittenQuestion from '$lib/minerva/question_types/WrittenQuestion.svelte';
</script>

<h1>Study</h1>

<MultipleChoiceQuestion term="parler" answer="to speak" />
<WrittenQuestion term="le chat" answer="cat" />

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
