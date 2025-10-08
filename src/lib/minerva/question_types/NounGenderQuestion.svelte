<script lang="ts">
	import { GlobalFlashcards } from '../data.svelte';
	import { PartOfSpeech, type QuestionType } from '../types';

	let { term, answer }: QuestionType = $props();

	let buttons_container: HTMLElement;

	function button_handler(ev: Event) {
		let button = ev.currentTarget as HTMLButtonElement;
		let chosen = button.innerHTML;
		let termCard = GlobalFlashcards.find((v) => v.term === term);
		if (termCard === undefined || termCard.term_type !== PartOfSpeech.NOUN) return;
		if (chosen[0].toLowerCase() === termCard.noun_gender) {
			button.style.backgroundColor = 'green';
		} else {
			button.style.backgroundColor = 'red';
		}
		for (const btn of buttons_container.children) {
			(btn as HTMLButtonElement).disabled = true;
		}
	}
</script>

<div class="question-container">
	<div class="question-text">What is the gender of '{term}'?</div>
	<div class="options-container" bind:this={buttons_container}>
		<button type="button" onclick={button_handler}>Male</button>
		<button type="button" onclick={button_handler}>Female</button>
	</div>
</div>

<style>
	.question-container {
		display: flex;
		flex-direction: column;
		align-items: center;
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

	.options-container {
		width: 90%;
		display: flex;
		justify-content: space-around;
	}

	.options-container > button {
		margin: 2.5vh 0;
		width: 40%;
		background: none;
		font-size: 16pt;
		color: white;
		border: 2px solid white;
	}

	button:hover {
		cursor: pointer;
	}
</style>
