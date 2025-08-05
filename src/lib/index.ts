import type { Tense, Voice, ComposedTenseOptions } from 'french-verbs';
import * as FrenchVerbs from 'french-verbs';
import type { VerbsInfo } from 'french-verbs-lefff';
import Lefff from 'french-verbs-lefff/dist/conjugations.json';
import type { VerbConjugations } from './types';

enum ConjugationPronoun {
	JE = 0,
	TU,
	IL,
	NOUS,
	VOUS,
	ILS
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
