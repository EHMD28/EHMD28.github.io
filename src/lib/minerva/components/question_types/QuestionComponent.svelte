<script lang="ts">
	import { type Question, type FlashCardData, QuestionCategory } from '$lib/minerva/scripts/types';
	import MultipleChoiceTemplate from './MultipleChoiceTemplate.svelte';
	import WrittenQuestionTemplate from './WrittenTemplate.svelte';

	interface Props {
		question: Question;
		card: FlashCardData;
		flash_cards: FlashCardData[];
	}

	let { question, card, flash_cards }: Props = $props();
</script>

{#if question.category === QuestionCategory.MULTIPLE_CHOICE}
	<MultipleChoiceTemplate {question} {card} {flash_cards} />
{:else if question.category === QuestionCategory.WRITTEN}
	<WrittenQuestionTemplate {question} {card} {flash_cards} />
{/if}
