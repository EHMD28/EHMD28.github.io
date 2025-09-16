export enum TermTypes {
	NOUN = 'noun',
	VERB = 'verb',
	ADJECTIVE = 'adjective',
	ADVERB = 'adverb'
}

export enum NounGender {
	MALE = 'm',
	FEMALE = 'f'
}

export interface VerbConjugations {
	je: string;
	tu: string;
	il: string;
	vous: string;
	nous: string;
	ils: string;
}

export interface AdjectiveForms {
	male: string;
	female: string;
	male_plural: string;
	female_plural: string;
}

export interface FlashCardData {
	term: string;
	definition: string;
	term_type: TermTypes;
	noun_gender: NounGender | null;
	verb_conjugations: VerbConjugations | null;
	adjective_forms: AdjectiveForms | null;
	tags: string[];
}

export function new_conjugations(): VerbConjugations {
	return {
		je: '',
		tu: '',
		il: '',
		vous: '',
		nous: '',
		ils: ''
	};
}

export function new_flashcard_data(): FlashCardData {
	return {
		term: '',
		definition: '',
		term_type: TermTypes.NOUN,
		noun_gender: null,
		verb_conjugations: null,
		adjective_forms: null,
		tags: []
	};
}
