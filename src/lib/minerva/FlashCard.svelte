<script lang="ts">
	import { conjugate_verb, conjugations_to_string } from '$lib';
	import { global_flashcards, print_global_flashcards } from '$lib/data.svelte';
	import type { FlashCardData } from '$lib/types';

	let { data }: { data: FlashCardData } = $props();

	// let { term, term_type, defintion, gender, conjugations }: FlashCardData = $props();

	function handleTermKeyUp(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			if (data.term_type === 'verb') {
				let verb = data.term.toLowerCase().trim();
				let conjugations = conjugate_verb(verb);
				if (conjugations !== null) {
					conjugations = conjugations;
					// console.log(
					// 	`Set conjugations for "${data.term}" to ${conjugations_to_string(conjugations)}`
					// );
				}
			}
		}
	}

	function handle_remove_button() {
		let index = global_flashcards.findIndex((v) => v.term == data.term);
		if (index > -1) {
			/* Remove element at index from array. */
			// console.log(`Removing term ${data.term} at ${index}`);
			global_flashcards.splice(index, 1);
			print_global_flashcards();
		}
	}
</script>

<div class="minerva-card">
	<div class="container">
		<label for="term">Term</label>
		<input type="text" id="term" name="term" bind:value={data.term} onkeyup={handleTermKeyUp} />
	</div>
	<div class="container">
		<label for="definition">Definition</label>
		<input type="text" id="definition" name="definition" bind:value={data.defintion} />
	</div>
	<div class="container">
		<label for="word-type">Word Type</label>
		<select id="word-type" name="word-type" bind:value={data.term_type}>
			<option value="noun">Noun</option>
			<option value="verb">Verb</option>
			<option value="adjective">Adjective</option>
			<option value="adverb">Adverb</option>
			<option value="article">Article</option>
			<option value="pronoun">Pronoun</option>
		</select>
	</div>
	<button class="remove-button" onclick={handle_remove_button}>X</button>
</div>

<style>
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-background-clip: text;
		-webkit-text-fill-color: #ffffff;
		transition: background-color 5000s ease-in-out 0s;
		box-shadow: inset 0 0 20px 20px #23232329;
	}

	.minerva-card {
		display: grid;
		grid-template-columns: 40% 40% 15% 5%;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20px;
		padding: 15px;
		border: 2px solid white;
	}

	.container > label {
		font-size: 14pt;
	}

	.container > input {
		color: white;
		background: transparent;
		border-bottom: 2px solid blue;
		font-size: 14pt;
		padding: 4px;
		margin-left: 10px;
		width: 70%;
	}

	button.remove-button {
		width: fit-content;
		padding: 5px 10px;
		border-radius: 20px;
		color: blue;
		font-size: 18pt;
		background: white;
		border: none;
	}

	button.remove-button:hover {
		color: rgb(184, 0, 0);
		background-color: black;
		cursor: pointer;
	}

	select,
	option {
		font-size: 12pt;
		color: black;
	}
</style>
