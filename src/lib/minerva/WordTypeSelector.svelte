<script lang="ts">
	import { new_conjugations, NounGender, PartOfSpeech, type FlashCardData } from './types';

	let { data }: { data: FlashCardData } = $props();

	function on_dropdown_change() {
		switch (data.term_type) {
			case PartOfSpeech.NOUN:
				if (data.noun_gender === undefined) data.noun_gender = NounGender.MALE;
				break;
			case PartOfSpeech.VERB:
				if (data.verb_conjugations === undefined) data.verb_conjugations = new_conjugations();
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
	<select id="word-type" name="word-type" bind:value={data.term_type} onchange={on_dropdown_change}>
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
