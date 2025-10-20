<script lang="ts">
	import { type Question, type FlashCardData, QuestionCategory } from '$lib/minerva/scripts/types';
	import MultipleChoiceTemplate from './MultipleChoiceTemplate.svelte';
	import WrittenQuestionTemplate from './WrittenTemplate.svelte';

	let { question, card }: { question: Question; card: FlashCardData } = $props();
</script>

{#if question.category === QuestionCategory.MULTIPLE_CHOICE}
	<MultipleChoiceTemplate term={question.term} answer={question.answer} prompt={question.prompt} />
{:else if question.category === QuestionCategory.WRITTEN}
	<WrittenQuestionTemplate {question} {card} />
{/if}
