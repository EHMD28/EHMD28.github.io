<script lang="ts">
	import { type FlashCardData, PartOfSpeech, NounGender, new_conjugations } from '../scripts/types';

	let { flash_card }: { flash_card: FlashCardData } = $props();

	function on_dropdown_change() {
		switch (flash_card.part_of_speech) {
			case PartOfSpeech.NOUN:
				if (flash_card.noun_gender === undefined) flash_card.noun_gender = NounGender.MALE;
				break;
			case PartOfSpeech.VERB:
				if (flash_card.verb_conjugations === undefined)
					flash_card.verb_conjugations = new_conjugations();
				break;
			case PartOfSpeech.ADJECTIVE:
				break;
			case PartOfSpeech.ADVERB:
				break;
		}
	}
</script>

<div id="word-type-container" class="container">
	<label for="word-type">Word Type</label>
	<select
		id="word-type"
		name="word-type"
		bind:value={flash_card.part_of_speech}
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

<style>
	#word-type-container {
		display: flex;
		align-items: center;
	}

	#word-type-container > label {
		margin-right: 15px;
	}

	select,
	option {
		padding-right: 5px;
		font-size: 12pt;
		color: black;
	}
</style>
