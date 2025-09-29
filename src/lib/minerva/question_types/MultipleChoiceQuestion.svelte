<script lang="ts">
	import { GlobalFlashcards } from '../data.svelte';

	interface Props {
		term: string;
		answer: string;
	}

	const { term, answer }: Props = $props();
	let question_options = get_options();

	function get_options(): string[] {
		let definitions = GlobalFlashcards.filter((v) => v.term !== answer).map((v) => v.definition);
		for (let i = definitions.length - 1; i > 0; i--) {
			let random = Math.floor(Math.random() * (i + 1));
			[definitions[i], definitions[random]] = [definitions[random], definitions[i]];
		}
		/* Select first three elements of shuffled array. */
		let ret = definitions.slice(0, 3);
		ret.push(answer);
		return definitions;
	}

	function select_option_handler(ev: Event) {
		const button = ev.currentTarget as HTMLButtonElement;
		const selected = button.innerText;
		button.style.background = selected === answer ? 'green' : 'red';
		button.disabled = true;
	}
</script>

<div class="question-container">
	<div class="question-text">Define: {term}</div>
	<div class="options-container">
		{#each question_options as option}
			<button type="button" onclick={select_option_handler}>{option}</button>
		{/each}
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
	}

	.options-container {
		display: grid;
		grid-template-columns: auto auto;
		margin-top: 5vh;
		row-gap: 2vh;
	}

	.options-container > button {
		text-align: center;
		background: none;
		color: white;
		font-size: 16pt;
		border: 2px solid white;
		margin: 2vh 2vw;
		padding: 2vh 2vw;
	}

	.options-container > button:hover {
		border: 2px solid rgb(146, 146, 255);
		cursor: pointer;
	}
</style>
