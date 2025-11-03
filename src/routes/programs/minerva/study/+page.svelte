<script lang="ts">
	import QuestionComponent from '$lib/minerva/components/question_types/QuestionComponent.svelte';
	import Navigator from '$lib/minerva/components/ui/Navigator.svelte';
	import {
		generate_random_question,
		type FlashCardData,
		type Question,
		type QuestionCardPair
	} from '$lib/minerva/scripts/types.js';
	import type { PageProps } from './$types';
	import { get_random_card } from '$lib/minerva/scripts';

	let { data }: PageProps = $props();
	let { result: flash_cards } = data;
	const question_cards: QuestionCardPair[] = [];
	// This is just so questions_cards[0] isn't undefined.
	generate_new_question();
	let current_question_index = $state(0);

	function generate_new_question() {
		let random_card = get_random_card(flash_cards);
		let random_question = generate_random_question(random_card);
		question_cards.push({ card: random_card, question: random_question });
	}

	function handle_next_button() {
		// Checking to see if the user is on the last currently generated question.
		if (current_question_index >= question_cards.length - 1) {
			generate_new_question();
		}
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
		<span>{current_question_index + 1}/{question_cards.length}</span>
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
		align-items: center;
	}

	.buttons-container > button {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 30%;
		height: 5vh;
		font-size: large;
	}
</style>
