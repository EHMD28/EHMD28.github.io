<script lang="ts">
	import { conjugate_verb } from '$lib/minerva/index';
	import { GlobalFlashcards, GlobalTags } from '$lib/minerva/data.svelte';
	import {
		new_conjugations,
		NounGender,
		TermTypes as TermType,
		type FlashCardData
	} from '$lib/minerva/types';
	import AdjectiveDetails from './AdjectiveDetails.svelte';
	import NounDetails from './NounDetails.svelte';
	import VerbDetails from './VerbDetails.svelte';

	let { data }: { data: FlashCardData } = $props();

	function handle_noun_term() {
		let noun = data.term.toLowerCase().trim();
		if (noun.startsWith('le')) {
			data.noun_gender = NounGender.MALE;
		} else if (noun.startsWith('la')) {
			data.noun_gender = NounGender.FEMALE;
		}
	}

	function handle_verb_term() {
		let verb = data.term.toLowerCase().trim();
		let conjugations = conjugate_verb(verb);
		if (conjugations !== null) {
			data.verb_conjugations = conjugations;
		}
	}

	function on_dropdown_change() {
		switch (data.term_type) {
			case TermType.NOUN:
				if (data.noun_gender === undefined) data.noun_gender = NounGender.MALE;
				break;
			case TermType.VERB:
				if (data.verb_conjugations === undefined) data.verb_conjugations = new_conjugations();
				break;
			case TermType.ADJECTIVE:
				break;
			case TermType.ADVERB:
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
			}
		}
	}

	function handle_remove_button() {
		let index = GlobalFlashcards.findIndex((v) => v.term == data.term);
		if (index > -1) {
			/* Remove element at index from array. */
			GlobalFlashcards.splice(index, 1);
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
				<NounDetails gender={data.noun_gender} />
			{:else if data.term_type == TermType.VERB}
				<VerbDetails conjugations={data.verb_conjugations} />
			{:else if data.term_type == TermType.ADJECTIVE}
				<AdjectiveDetails forms={data.adjective_forms} />
			{/if}
		</div>
		<details>
			<summary>Tags: {data.tags}</summary>
			<select multiple name="tags-select" id="tags-select">
				{#each GlobalTags as tag}
					<option value={tag}>{tag}</option>
				{/each}
			</select>
		</details>
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

	input {
		padding: 4px;
	}

	.minerva-card {
		margin-bottom: 20px;
		padding: 15px;
		border: 2px solid white;
	}

	div.containers-container {
		display: grid;
		grid-template-columns: 40% 40% 16% 4%;
		margin-bottom: 15px;
	}

	#word-type-container {
		display: flex;
		align-items: center;
	}

	#word-type-container > label {
		margin-right: 15px;
	}

	select#word-type {
		padding-right: 5px;
	}

	.container > label {
		font-size: 14pt;
	}

	.container > input {
		color: white;
		background: transparent;
		border-bottom: 2px solid blue;
		font-size: 14pt;
		margin-left: 10px;
		width: 70%;
	}

	button.remove-button {
		width: fit-content;
		height: fit-content;
		padding: 5px 10px;
		border-radius: 20px;
		color: blue;
		font-size: 100%;
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

	#tags-select {
		margin-top: 1vh;
	}

	#tags-select > option {
		margin: 0 0.25vw;
	}
</style>
