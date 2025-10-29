<script lang="ts">
	import {
		type Question,
		type FlashCardData,
		PartOfSpeech,
		QuestionType
	} from '$lib/minerva/scripts/types';

	interface Props {
		question: Question;
		card: FlashCardData;
		flash_cards: FlashCardData[];
	}

	const { question, card, flash_cards }: Props = $props();
	let { answer, term, prompt } = question;
	let input_value = $state('');
	let input_element: HTMLInputElement;

	/**
	 * Returns a list of the possible answers when the question is translating
	 * from English to French (i.e. conjugations or adjective forms).
	 */
	function get_possible_answers(): string[] {
		switch (card.part_of_speech) {
			case PartOfSpeech.NOUN:
				// TODO: Update to include male and female form (if applicable).
				const synonyms = flash_cards.filter((v) => v.en === card.en);
				return synonyms.map((v) => v.fr);
			case PartOfSpeech.VERB:
				const conjugations = Object.keys(card.verb_conjugations).map(
					(k) => card.verb_conjugations[k]
				);
				return [answer, ...conjugations];
			case PartOfSpeech.ADJECTIVE:
				const forms = Object.keys(card.adjective_forms).map((k) => card.adjective_forms[k]);
				return forms;
			default:
				return [answer];
		}
	}

	function get_noun_without_article(noun: string): string | null {
		const articles = ['le', 'la', 'les', "l'"];
		const word_separator = ' ';
		const words = noun.split(word_separator);
		// If the first word of the noun is an article.
		if (articles.includes(words[0])) {
			// Return a string of every other word except the first one.
			return words.slice(1).join(word_separator).trim();
		} else {
			return null;
		}
	}

	function check_answer() {
		input_value = input_value.trim().toLocaleLowerCase();
		const possible_answers: string[] = [answer];
		const article_less_noun = get_noun_without_article(answer);
		if (article_less_noun !== null) possible_answers.push(article_less_noun);
		if (question.question_type == QuestionType.WRITTEN_EN_TO_FR) {
			possible_answers.push(...get_possible_answers());
		}
		if (possible_answers.includes(input_value)) {
			input_element.style.border = '2px solid green';
			input_element.disabled = true;
		} else {
			input_element.style.border = '2px solid red';
		}
	}

	function input_enter_handler(ev: KeyboardEvent) {
		if (ev.key === 'Enter') {
			check_answer();
		}
	}
</script>

<div class="question-container">
	<div class="question-text">{prompt}: {term}</div>
	<div class="written-input-container">
		<input
			type="text"
			class="written-input"
			bind:value={input_value}
			bind:this={input_element}
			onkeyup={input_enter_handler}
		/>
		<button class="check-button" type="button" onclick={(_) => check_answer()}>Check</button>
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
		font-size: 16pt;
	}

	.written-input-container {
		display: flex;
		justify-content: space-around;
		margin: 2% 5%;
	}

	.written-input-container > input {
		width: 80%;
		color: white;
		background: none;
		border: 2px solid white;
		font-size: 16pt;
	}

	.written-input-container > button {
		width: 15%;
	}

	button:hover {
		cursor: pointer;
	}
</style>
