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
	term_type: TermTypes | undefined;
	defintion: string;
	gender: NounGender | undefined;
	conjugations: VerbConjugations | undefined;
}

export function new_flashcard_data(): FlashCardData {
	return {
		term: '',
		term_type: TermTypes.NOUN,
		defintion: '',
		gender: undefined,
		conjugations: undefined
	};
}
