<script lang="ts">
	import { conjugate_verb, conjugations_to_string } from '$lib';
	import type { FlashCardData } from '$lib/types';

	let { term, term_type, defintion, gender, conjugations }: FlashCardData = $props();

	function onDropdownChange() {}

	function handleTermKeyUp(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			if (term_type === 'verb') {
				let verb = term.toLowerCase().trim();
				let conjugations = conjugate_verb(verb);
				if (conjugations !== null) {
					conjugations = conjugations;
					console.log(`Set conjugations for "${term}" to ${conjugations_to_string(conjugations)}`);
				}
			}
		}
	}
</script>

<div class="minerva-card">
	<div class="container">
		<label for="term">Term</label>
		<input type="text" id="term" name="term" bind:value={term} onkeyup={handleTermKeyUp} />
	</div>
	<div class="container">
		<label for="definition">Definition</label>
		<input type="text" id="definition" name="definition" bind:value={defintion} />
	</div>
	<div class="container">
		<label for="word-type">Word Type</label>
		<select id="word-type" name="word-type" bind:value={term_type} onchange={onDropdownChange}>
			<option value="noun">Noun</option>
			<option value="verb">Verb</option>
			<option value="adjective">Adjective</option>
			<option value="adverb">Adverb</option>
			<option value="article">Article</option>
			<option value="pronoun">Pronoun</option>
		</select>
	</div>
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
		grid-template-columns: 40% 40% 20%;
		flex-direction: row;
		justify-content: space-between;
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

	select,
	option {
		font-size: 12pt;
		color: black;
	}
</style>
