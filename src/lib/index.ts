import type { Tense, Voice, ComposedTenseOptions } from 'french-verbs';
import * as FrenchVerbs from 'french-verbs';
import type { VerbsInfo } from 'french-verbs-lefff';
import Lefff from 'french-verbs-lefff/dist/conjugations.json';

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

enum ConjugationPronoun {
	JE = 0,
	TU,
	IL,
	NOUS,
	VOUS,
	ILS
}

export interface FlashCardData {
	term: string;
	term_type: TermTypes | undefined;
	defintion: string;
	gender: NounGender | undefined;
	conjugations: VerbConjugations | undefined;
}

export function conjugations_to_string(vc: VerbConjugations): string {
	return `{
        je: ${vc.je},
        tu: ${vc.tu},
        il: ${vc.il},
        vous: ${vc.vous},
        nous: ${vc.nous},
        ils: ${vc.ils}
    }`;
}

function conjugate_verb_with_pronoun(verb: string, pronoun: ConjugationPronoun): string {
	let tense: Tense = 'PRESENT';
	let composed_tense_options: ComposedTenseOptions = {
		aux: undefined,
		agreeGender: undefined,
		agreeNumber: undefined
	};
	let use_pronomial = false;
	let negative_adverb: string | undefined = undefined;
	let modifier_adverb: string | undefined = undefined;
	let voice: Voice = 'Act';
	return FrenchVerbs.getConjugation(
		Lefff as VerbsInfo,
		verb,
		tense,
		pronoun,
		composed_tense_options,
		use_pronomial,
		negative_adverb,
		modifier_adverb,
		voice
	);
}

export function conjugate_verb(verb: string): VerbConjugations | null {
	try {
		let je = conjugate_verb_with_pronoun(verb, ConjugationPronoun.JE);
		let tu = conjugate_verb_with_pronoun(verb, ConjugationPronoun.TU);
		let il = conjugate_verb_with_pronoun(verb, ConjugationPronoun.IL);
		let nous = conjugate_verb_with_pronoun(verb, ConjugationPronoun.NOUS);
		let vous = conjugate_verb_with_pronoun(verb, ConjugationPronoun.VOUS);
		let ils = conjugate_verb_with_pronoun(verb, ConjugationPronoun.ILS);
		return { je, tu, il, nous, vous, ils };
	} catch (err) {
		return null;
	}
}

export let global_flashcards: FlashCardData[] = [
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
		conjugations: {
			je: '',
			tu: '',
			il: '',
			vous: '',
			nous: '',
			ils: ''
		}
	}
];
