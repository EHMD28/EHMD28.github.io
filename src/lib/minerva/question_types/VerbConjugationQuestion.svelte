<script lang="ts">
	import { conjugate_verb, conjugate_verb_with_pronoun } from '..';
	import type { QuestionType } from '../types';

	let { term, answer }: QuestionType = $props();
	const pronouns = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];
	const random_number = Math.floor(Math.random() * pronouns.length);
	/*
        conjugate_verb_with_pronoun() accepts a number as the second argument, not a
        string. But this still works because the indices of the array matches with the
        enum the function uses
    */
	answer = conjugate_verb_with_pronoun(term, random_number);

	let input_value = $state('');
	let input_element: HTMLInputElement;

	function check_answer() {
		if (input_value.trim() === answer) {
			input_element.style.border = '2px solid green';
			input_element.disabled = true;
		} else {
			input_element.style.border = '2px solid red';
		}
	}

	function input_enter_handler(ev: KeyboardEvent) {
		if (ev.key === 'Enter') {
			check_answer();
		}
	}
</script>

<div class="question-container">
	<div class="question-text">Conjugate {term} with {pronouns[random_number]}</div>
	<div class="written-input-container">
		<input
			type="text"
			class="written-input"
			bind:value={input_value}
			bind:this={input_element}
			onkeyup={input_enter_handler}
		/>
		<button class="check-button" type="button" onclick={() => check_answer()}>Check</button>
	</div>
</div>

<style>
	.question-container {
		margin: 5vh 0;
		padding: 1vh 1vw;
		border: 2px solid white;
		font-size: 16pt;
	}

	.question-text {
		margin-top: 5vh;
		text-align: center;
		vertical-align: middle;
		font-size: 16pt;
	}

	.written-input-container {
		display: flex;
		justify-content: space-around;
		margin: 2% 5%;
	}

	.written-input-container > input {
		width: 80%;
		color: white;
		background: none;
		border: 2px solid white;
		font-size: 16pt;
	}

	.written-input-container > button {
		width: 15%;
	}

	button:hover {
		cursor: pointer;
	}
</style>
