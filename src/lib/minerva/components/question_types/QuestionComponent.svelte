<script lang="ts">
    import {
        type Question,
        type FlashCardData,
        QuestionCategory
    } from '$lib/minerva/scripts/types';
    import MultipleChoiceTemplate from './MultipleChoiceTemplate.svelte';
    import WrittenQuestionTemplate from './WrittenTemplate.svelte';

    interface Props {
        question: Question;
        card: FlashCardData;
        flash_cards: FlashCardData[];
    }

    let props: Props = $props();
    let question = $derived(props.question);
    let card = $derived(props.card);
    let flash_cards = $derived(props.flash_cards);

    function DEBUG() {
        console.debug(`Card: ${card.fr} = ${card.en} | Question: ${question.term}`);
        console.debug(`Flash Cards: ${flash_cards.map((v) => v.fr)}`);
        console.debug('----------------------------------------------------');
    }
</script>

<button onclick={DEBUG}>DEBUG 2: Electric Boogaloo</button>
{#if question.category === QuestionCategory.MULTIPLE_CHOICE}
    <MultipleChoiceTemplate {question} {card} {flash_cards} />
{:else if question.category === QuestionCategory.WRITTEN}
    <WrittenQuestionTemplate {question} {card} {flash_cards} />
{/if}
