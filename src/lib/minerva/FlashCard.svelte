<script lang="ts">
	import { conjugate_verb } from '$lib/minerva/index';
	import { GlobalFlashcards, GlobalTags } from '$lib/minerva/data.svelte';
	import {
		new_conjugations,
		NounGender,
		PartOfSpeech,
		type FlashCardData
	} from '$lib/minerva/types';
	import AdjectiveDetails from './AdjectiveDetails.svelte';
	import NounDetails from './NounDetails.svelte';
	import VerbDetails from './VerbDetails.svelte';
	import WordTypeSelector from './WordTypeSelector.svelte';

	let { data }: { data: FlashCardData } = $props();

	let tag_input = $state('');

	function handle_tag_add(e) {
		if (!GlobalTags.includes(tag_input)) {
			GlobalTags.push(tag_input);
		}
	}

	function handle_tag_remove(e) {
		let index = GlobalTags.indexOf(tag_input);
		if (index !== -1) {
			/* Remove tag from array. */
			GlobalTags.splice(index, 1);
			let affected = GlobalFlashcards.filter((v) => v.tags.includes(tag_input));
			for (let data of affected) {
				index = data.tags.indexOf(tag_input);
				data.tags.splice(index, 1);
			}
		}
	}

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

	function handleTermKeyUp(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			switch (data.term_type) {
				case PartOfSpeech.NOUN:
					handle_noun_term();
					break;
				case PartOfSpeech.VERB:
					handle_verb_term();
					break;
				case PartOfSpeech.ADJECTIVE:
					break;
				case PartOfSpeech.ADVERB:
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

	function handle_checkbox_change(ev: Event) {
		let checkbox = ev.currentTarget as HTMLInputElement;
		if (checkbox.checked) {
			data.tags.push(checkbox.id);
		} else {
			let index = data.tags.indexOf(checkbox.id);
			data.tags.splice(index, 1);
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
			<input type="text" id="definition" name="definition" bind:value={data.definition} />
		</div>
		<WordTypeSelector {data} />
		<button class="remove-button" onclick={handle_remove_button}>X</button>
	</div>
	<details>
		<summary>Info</summary>
		<div>
			{#if data.term_type == PartOfSpeech.NOUN}
				<NounDetails gender={data.noun_gender} />
			{:else if data.term_type == PartOfSpeech.VERB}
				<VerbDetails conjugations={data.verb_conjugations} />
			{:else if data.term_type == PartOfSpeech.ADJECTIVE}
				<AdjectiveDetails forms={data.adjective_forms} />
			{/if}
		</div>
		<details>
			<summary>Tags: {data.tags}</summary>
			<div id="tags-select-container">
				{#each GlobalTags as tag}
					<input
						type="checkbox"
						name={tag}
						id={tag}
						checked={data.tags.includes(tag)}
						onchange={handle_checkbox_change}
					/>
					<label for={tag}>{tag}</label>
					<br />
				{/each}
				<input type="text" bind:value={tag_input} />
				<button type="button" onclick={handle_tag_add}>Add</button>
				<button type="button" onclick={handle_tag_remove}>Remove</button>
			</div>
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

	details > div {
		padding: 15px;
	}

	#tags-select {
		margin-top: 1vh;
	}

	#tags-select-container > input {
		margin-bottom: 2vh;
	}
</style>
