<script lang="ts">
	import { conjugate_verb } from '$lib';
	import { global_flashcards } from '$lib/data.svelte';
	import {
		new_conjugations,
		new_flashcard_data,
		NounGender,
		TermTypes as TermType,
		type FlashCardData
	} from '$lib/types';

	let { data }: { data: FlashCardData } = $props();

	function handle_noun_term() {
		let noun = data.term.toLowerCase().trim();
		if (noun.startsWith('le')) {
			data.gender = NounGender.MALE;
		} else if (noun.startsWith('la')) {
			data.gender = NounGender.FEMALE;
		}
	}

	function handle_verb_term() {
		let verb = data.term.toLowerCase().trim();
		let conjugations = conjugate_verb(verb);
		if (conjugations !== null) {
			data.conjugations = conjugations;
		}
	}

	function on_dropdown_change() {
		switch (data.term_type) {
			case TermType.NOUN:
				if (data.gender === undefined) data.gender = NounGender.MALE;
				break;
			case TermType.VERB:
				if (data.conjugations === undefined) data.conjugations = new_conjugations();
				break;
			case TermType.ADJECTIVE:
				break;
			case TermType.ADVERB:
				break;
			case TermType.ARTICLE:
				break;
			case TermType.PRONOUN:
				break;
		}
	}

	function handleTermKeyUp(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			switch (data.term_type) {
				case TermType.NOUN:
					handle_noun_term();
					break;
				case TermType.VERB:
					handle_verb_term();
					break;
				case TermType.ADJECTIVE:
					break;
				case TermType.ADVERB:
					break;
				case TermType.ARTICLE:
					break;
				case TermType.PRONOUN:
					break;
			}
		}
	}

	function handle_remove_button() {
		let index = global_flashcards.findIndex((v) => v.term == data.term);
		if (index > -1) {
			/* Remove element at index from array. */
			global_flashcards.splice(index, 1);
		}
	}
</script>

<div class="minerva-card">
	<div class="containers-container">
		<div class="container">
			<label for="term">Term</label>
			<input type="text" id="term" name="term" bind:value={data.term} onkeyup={handleTermKeyUp} />
		</div>
		<div class="container">
			<label for="definition">Definition</label>
			<input type="text" id="definition" name="definition" bind:value={data.defintion} />
		</div>
		<div id="word-type-container" class="container">
			<label for="word-type">Word Type</label>
			<select
				id="word-type"
				name="word-type"
				bind:value={data.term_type}
				onchange={on_dropdown_change}
			>
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
	<details>
		<summary>Info</summary>
		<div>
			{#if data.term_type == TermType.NOUN}
				<label for="noun-gender">Gender</label>
				<select name="noun-gender" id="noun-gender" bind:value={data.gender}>
					<option value="m">Male</option>
					<option value="f">Female</option>
				</select>
			{:else if data.term_type == TermType.VERB}
				<div id="conjugations-container">
					<label for="je-conj">Je</label>
					<input type="text" name="je-conj" id="je-conj" bind:value={data.conjugations.je} />
					<label for="tu-conj">Tu</label>
					<input type="text" name="tu-conj" id="tu-conj" bind:value={data.conjugations.tu} />
					<label for="il-conj">Il/Elle</label>
					<input type="text" name="il-conj" id="il-conj" bind:value={data.conjugations.il} />
					<label for="vous-conj">Vous</label>
					<input type="text" name="vous-conj" id="vous-conj" bind:value={data.conjugations.vous} />
					<label for="nous-conj">Nous</label>
					<input type="text" name="nous-conj" id="nous-conj" bind:value={data.conjugations.nous} />
					<label for="ils-conj">Ils/Elles</label>
					<input type="text" name="ils-conj" id="ils-conj" bind:value={data.conjugations.ils} />
				</div>
			{/if}
		</div>
	</details>
</div>

<style>
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active,
	input::spelling-error {
		-webkit-background-clip: text;
		-webkit-text-fill-color: #ffffff;
		transition: background-color 5000s ease-in-out 0s;
		box-shadow: inset 0 0 20px 20px #23232329;
	}

	.minerva-card {
		margin-bottom: 20px;
		padding: 15px;
		border: 2px solid white;
	}

	div.containers-container {
		display: grid;
		grid-template-columns: 40% 40% 15% 5%;
		margin-bottom: 15px;
	}

	#word-type-container {
		display: flex;
		align-items: center;
	}

	#word-type-container > label {
		margin-right: 15px;
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

	details > div {
		padding: 15px;
	}

	#conjugations-container {
		display: grid;
		grid-template-columns: 5% 20%;
	}

	#conjugations-container > label,
	#conjugations-container > input {
		margin-bottom: 10px;
	}

	#conjugations-container > input {
		color: black;
		padding: 0 5px;
	}
</style>
