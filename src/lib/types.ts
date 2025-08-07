export enum TermTypes {
	NOUN = 'noun',
	VERB = 'verb',
	ADJECTIVE = 'adjective',
	ADVERB = 'adverb',
	ARTICLE = 'article',
	PRONOUN = 'pronoun'
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

export interface FlashCardData {
	term: string;
	term_type: TermTypes;
	defintion: string;
	gender: NounGender;
	conjugations: VerbConjugations;
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
		term_type: TermTypes.NOUN,
		defintion: '',
		gender: NounGender.MALE,
		conjugations: new_conjugations()
	};
}
