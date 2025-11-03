import type { Tense, Voice, ComposedTenseOptions } from 'french-verbs';
import * as FrenchVerbs from 'french-verbs';
import type { VerbsInfo } from 'french-verbs-lefff';
import Lefff from 'french-verbs-lefff/dist/conjugations.json';
import type { FlashCardData, Question, QuestionCardPair, VerbConjugations } from './types';

/* DO NOT CHANGE THE ORDER OF THESE VARIANTS. They intentionally line up with values for `getConjugation()`. */
export enum ConjugationPronoun {
	JE = 0,
	TU,
	IL,
	NOUS,
	VOUS,
	ILS
}

/**
 * Returns a random pronoun as a variant of the `ConjugationPronoun` enum.
 */
export function get_random_pronoun_enum(): ConjugationPronoun {
	/* Make sure this value is always up-to-date. */
	const last_variant = ConjugationPronoun.ILS;
	/* Since the enums are already have values from 0-5, it's not necessary to convert them into an array
    or anything like that. */
	return Math.floor(Math.random() * last_variant);
}

/**
 * Returns a random pronoun as a lowercase string.
 */
export function get_random_pronoun_str(): string {
	return pronoun_enum_to_str(get_random_pronoun_enum());
}

export function pronoun_enum_to_str(variant: ConjugationPronoun): string {
	switch (variant) {
		case ConjugationPronoun.JE:
			return 'je';
		case ConjugationPronoun.TU:
			return 'tu';
		case ConjugationPronoun.IL:
			return 'il/elle';
		case ConjugationPronoun.NOUS:
			return 'nous';
		case ConjugationPronoun.VOUS:
			return 'vous';
		case ConjugationPronoun.ILS:
			return 'ils/elles';
	}
}

/**
 * Returns a string of the `verb` conjugated with `pronoun` in the present tense.
 */
export function conjugate_verb_with_pronoun(verb: string, pronoun: ConjugationPronoun): string {
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

/**
 * Returns an object with all the verbs conjugated in the present tense.
 */
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

export function get_random_card(flash_cards: FlashCardData[]): FlashCardData | null {
	if (flash_cards.length === 0) return null;
	let index = Math.floor(Math.random() * flash_cards.length);
	return flash_cards[index];
}

export function flash_cards_equal(a: FlashCardData, b: FlashCardData) {}

export function question_card_pair_equal(a: QuestionCardPair, b: QuestionCardPair) {}
