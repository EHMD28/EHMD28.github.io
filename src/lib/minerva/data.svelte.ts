import { NounGender, TermTypes, type FlashCardData } from './types';

const flash_cards: FlashCardData[] = [
	{
		term: 'parler',
		defintion: 'to speak',
		term_type: TermTypes.VERB,
		noun_gender: null,
		verb_conjugations: {
			je: 'parle',
			tu: 'parles',
			il: 'parle',
			vous: 'parlez',
			nous: 'parlons',
			ils: 'parlent'
		},
		adjective_forms: null,
		tags: ['beginner']
	},
	{
		term: 'le chat',
		defintion: 'cat',
		term_type: TermTypes.NOUN,
		noun_gender: NounGender.MALE,
		verb_conjugations: null,
		adjective_forms: null,
		tags: ['beginner', 'animal']
	},
	{
		term: 'petit',
		defintion: 'small',
		term_type: TermTypes.ADJECTIVE,
		noun_gender: null,
		verb_conjugations: null,
		adjective_forms: {
			male: 'petit',
			female: 'petite',
			male_plural: 'petits',
			female_plural: 'petites'
		},
		tags: ['beginner']
	},
	{
		term: 'rarement',
		defintion: 'rarely',
		term_type: TermTypes.ADVERB,
		noun_gender: null,
		verb_conjugations: null,
		adjective_forms: null,
		tags: ['beginner']
	}
];

export const GlobalFlashcards = $state(flash_cards);

export const GlobalTags = $state([...new Set(flash_cards.map((v) => v.tags).flat())]);

export function print_global_flashcards() {
	for (const [i, value] of flash_cards.entries()) {
		console.log(`${i}: ${value.term}`);
	}
	console.log('---------------------------');
}
