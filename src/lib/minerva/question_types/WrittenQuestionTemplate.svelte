<script lang="ts">
	import type { QuestionType } from '../types';

	interface Props {
		prompt: string;
		term: string;
		answer: string;
	}

	const { prompt, term, answer }: Props = $props();
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
	<div class="question-text">{prompt}: {term}</div>
	<div class="written-input-container">
		<input
			type="text"
			class="written-input"
			bind:value={input_value}
			bind:this={input_element}
			onkeyup={input_enter_handler}
		/>
		<button class="check-button" type="button" onclick={(_) => check_answer()}>Check</button>
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
