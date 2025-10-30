<script lang="ts">
	import QuestionComponent from '$lib/minerva/components/question_types/QuestionComponent.svelte';
	import Navigator from '$lib/minerva/components/ui/Navigator.svelte';
	import {
		MOCK_NOUN_CARD,
		MOCK_NOUN_WRITTEN_FR_TO_EN_QUESTION
	} from '$lib/minerva/scripts/mock_data';
	import {
		generate_random_question,
		type FlashCardData,
		type Question,
		type QuestionCardPair
	} from '$lib/minerva/scripts/types.js';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import { get_random_card } from '$lib/minerva/scripts';

	let { data }: PageProps = $props();
	let { result: flash_cards, error } = data;
	const question_cards: QuestionCardPair[] = [];
	// This is just so questions_cards[0] isn't undefined.
	generate_new_question();
	let current_question_index = $state(0);

	// onMount(() => {
	// 	generate_new_question();
	// });

	function generate_new_question() {
		const random_card = get_random_card(flash_cards);
		const random_question = generate_random_question(random_card);
		question_cards.push({ card: random_card, question: random_question });
	}

	function handle_next_button() {
		current_question_index++;
	}

	function handle_previous_button() {
		current_question_index = Math.max(current_question_index - 1, 0);
	}
</script>

<h1>Study (Étudier)</h1>
<Navigator />
<main>
	<QuestionComponent
		question={question_cards[current_question_index].question}
		card={question_cards[current_question_index].card}
		{flash_cards}
	/>
	<div class="buttons-container">
		<button type="button" onclick={handle_previous_button}>Previous</button>
		<button type="button" onclick={handle_next_button}>Next</button>
	</div>
</main>

<!-- <MockQuestions {flash_cards} /> -->

<style>
	h1 {
		margin-bottom: 5vh;
	}

	.buttons-container {
		display: flex;
		justify-content: space-around;
	}

	.buttons-container > button {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 40%;
		height: 5vh;
		font-size: large;
	}
</style>
