<script lang="ts">
	import { conjugate_verb } from '$lib/minerva/scripts/index';
	import {
		new_conjugations,
		NounGender,
		PartOfSpeech,
		type FlashCardData
	} from '$lib/minerva/scripts/types';
	import AdjectiveDetails from './AdjectiveDetails.svelte';
	import NounDetails from './NounDetails.svelte';
	import VerbDetails from './VerbDetails.svelte';
	import WordTypeSelector from './WordTypeSelector.svelte';

	interface Props {
		flash_card: FlashCardData;
		flash_cards: FlashCardData[];
		tags: string[];
	}

	const { flash_card, flash_cards, tags }: Props = $props();

	let tag_input = $state('');

	function handle_tag_add(e) {
		if (!tags.includes(tag_input)) {
			tags.push(tag_input);
		}
	}

	function handle_tag_remove(e) {
		let index = tags.indexOf(tag_input);
		if (index !== -1) {
			/* Remove tag from array. */
			tags.splice(index, 1);
			let affected = flash_cards.filter((v) => v.tags.includes(tag_input));
			for (let flash_card of affected) {
				index = flash_card.tags.indexOf(tag_input);
				flash_card.tags.splice(index, 1);
			}
		}
	}

	function handle_noun_term() {
		let noun = flash_card.fr.toLowerCase().trim();
		if (noun.startsWith('le')) {
			flash_card.noun_gender = NounGender.MALE;
		} else if (noun.startsWith('la')) {
			flash_card.noun_gender = NounGender.FEMALE;
		}
	}

	function handle_verb_term() {
		let verb = flash_card.fr.toLowerCase().trim();
		let conjugations = conjugate_verb(verb);
		if (conjugations !== null) {
			flash_card.verb_conjugations = conjugations;
		}
	}

	function handleTermKeyUp(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			switch (flash_card.part_of_speech) {
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
		let index = flash_cards.findIndex((v) => v.fr == flash_card.fr);
		if (index > -1) {
			/* Remove element at index from array. */
			flash_cards.splice(index, 1);
		}
	}

	function handle_checkbox_change(ev: Event) {
		let checkbox = ev.currentTarget as HTMLInputElement;
		if (checkbox.checked) {
			flash_card.tags.push(checkbox.id);
		} else {
			let index = flash_card.tags.indexOf(checkbox.id);
			flash_card.tags.splice(index, 1);
		}
	}
</script>

<div class="minerva-card">
	<div class="containers-container">
		<div class="container">
			<label for="term">Term</label>
			<input
				type="text"
				id="term"
				name="term"
				bind:value={flash_card.fr}
				onkeyup={handleTermKeyUp}
			/>
		</div>
		<div class="container">
			<label for="definition">Definition</label>
			<input type="text" id="definition" name="definition" bind:value={flash_card.en} />
		</div>
		<WordTypeSelector {flash_card} />
		<button class="remove-button" onclick={handle_remove_button}>X</button>
	</div>
	<details>
		<summary>Info</summary>
		<div>
			{#if flash_card.part_of_speech == PartOfSpeech.NOUN}
				<NounDetails gender={flash_card.noun_gender} />
			{:else if flash_card.part_of_speech == PartOfSpeech.VERB}
				<VerbDetails conjugations={flash_card.verb_conjugations} />
			{:else if flash_card.part_of_speech == PartOfSpeech.ADJECTIVE}
				<AdjectiveDetails forms={flash_card.adjective_forms} />
			{/if}
		</div>
		<details>
			<summary>Tags: {flash_card.tags}</summary>
			<div id="tags-select-container">
				{#each tags as tag}
					<input
						type="checkbox"
						name={tag}
						id={tag}
						checked={flash_card.tags.includes(tag)}
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
