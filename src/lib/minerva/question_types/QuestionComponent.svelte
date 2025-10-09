<script lang="ts">
	import { QuestionCategory, type Question } from '../types';
	import MultipleChoiceTemplate from './MultipleChoiceTemplate.svelte';
	import WrittenQuestionTemplate from './WrittenTemplate.svelte';

	let { data }: { data: Question } = $props();
</script>

{#if data.category === QuestionCategory.MULTIPLE_CHOICE}
	<MultipleChoiceTemplate term={data.term} answer={data.answer} prompt={data.prompt} />
{:else if data.category === QuestionCategory.WRITTEN}
	<WrittenQuestionTemplate term={data.term} answer={data.answer} prompt={data.prompt} />
{/if}
