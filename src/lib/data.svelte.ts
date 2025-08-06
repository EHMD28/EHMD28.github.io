import { NounGender, TermTypes, type FlashCardData } from './types';

export let global_flashcards: FlashCardData[] = $state([
	{
		term: 'être',
		term_type: TermTypes.VERB,
		gender: undefined,
		defintion: 'to be',
		conjugations: {
			je: 'suis',
			tu: 'es',
			il: 'est',
			vous: 'êtes',
			nous: 'sommes',
			ils: 'sont'
		}
	},
	{
		term: 'chat',
		term_type: TermTypes.NOUN,
		gender: NounGender.MALE,
		defintion: 'cat',
		conjugations: undefined
	}
]);

export function print_global_flashcards() {
	for (const [i, value] of global_flashcards.entries()) {
		console.log(`${i}: ${value.term}`);
	}
	console.log('---------------------------');
}
