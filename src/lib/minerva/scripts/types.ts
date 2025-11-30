import {
    ConjugationPronoun,
    get_random_pronoun_enum,
    get_random_pronoun_str,
    pronoun_enum_to_str
} from '.';

/**
 * The type used for representing which part of speech the term belongs to. At runtime, these types
 * are stored as lowercase strings.
 */
export enum PartOfSpeech {
    NOUN = 'noun',
    VERB = 'verb',
    ADJECTIVE = 'adjective',
    ADVERB = 'adverb'
}

/**
 * The type used for storing what the gender of the noun is. At runtime, the two variants are
 * stored as the strings `'m'` and `'f'`.
 */
export enum NounGender {
    MALE = 'm',
    FEMALE = 'f'
}

/**
 * The type used for representing the six, present-tense conjugations for a verb.
 */
export interface VerbConjugations {
    je: string;
    tu: string;
    il: string;
    vous: string;
    nous: string;
    ils: string;
}

export function get_conjugation_from_verb_conjugations(
    vc: VerbConjugations,
    pronoun: ConjugationPronoun
) {
    switch (pronoun) {
        case ConjugationPronoun.JE:
            return vc.je;
        case ConjugationPronoun.TU:
            return vc.tu;
        case ConjugationPronoun.IL:
            return vc.il;
        case ConjugationPronoun.NOUS:
            return vc.nous;
        case ConjugationPronoun.VOUS:
            return vc.vous;
        case ConjugationPronoun.ILS:
            return vc.ils;
    }
}

// export function get_conjugation_from_verb_conjugations(
// 	vc: VerbConjugations,
// 	pronoun: string
// ): string {
// 	/*
//         Technically, the 'il', 'elle', and 'il/elle' aren't all necessary, but I want
//         to try and future-proof this function.
//     */
// 	switch (pronoun) {
// 		case 'je':
// 			return vc.je;
// 		case 'tu':
// 			return vc.tu;
// 		case 'il':
// 		case 'elle':
// 		case 'il/elle':
// 			return vc.il;
// 		case 'vous':
// 			return vc.vous;
// 		case 'nous':
// 			return vc.nous;
// 		case 'ils':
// 		case 'elles':
// 		case 'ils/elles':
// 			return vc.ils;
// 	}
// }

/**
 * The type used for representing the four (m, f, mp, fp) forms of an adjective.
 */
export interface AdjectiveForms {
    male: string;
    female: string;
    male_plural: string;
    female_plural: string;
}

/**
 * Returns a new `AdjectiveForms` object with all values set to empty strings.
 */
export function new_adjective_forms(): AdjectiveForms {
    return {
        male: '',
        female: '',
        male_plural: '',
        female_plural: ''
    };
}

/**
 * The type used for representing an entire flashcard. The `term_type` property should correspond
 * with which other member of the object is not null. For example, if `term_type` is `NOUN`, then
 * only `noun_gender` should be not `null`. All other sub-values should be `null`.
 */
export interface FlashCardData {
    fr: string;
    en: string;
    // TODO: Change `term_type` to `part_of_speech`.
    part_of_speech: PartOfSpeech;
    noun_gender: NounGender | null;
    verb_conjugations: VerbConjugations | null;
    adjective_forms: AdjectiveForms | null;
    tags: string[];
}

/**
 * @returns Returns a new `VerbConjugations` object with each of the
 * conjugations set to an empty string.
 */
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

/**
 * @returns New `FlashCardData` object with every term set the default (empty string,
 * null, or empty array). For `FlashCardData.term_type`, the default is `TermType.NOUN`.
 */
export function new_flashcard_data(data: FlashCardData = null): FlashCardData {
    if (data === null) {
        return {
            fr: '',
            en: '',
            part_of_speech: PartOfSpeech.NOUN,
            noun_gender: null,
            verb_conjugations: null,
            adjective_forms: null,
            tags: []
        };
    } else {
        return data;
    }
}

/**
 * @deprecated This type is going to be removed in favor the term and answer being more coupled the question.
 */
export interface WrittenQuestionType {
    prompt: string;
    term: string;
    answer: string;
}

/**
 * This type is used for representing what category of question it is (written or multiple-choice).
 */
export enum QuestionCategory {
    MULTIPLE_CHOICE,
    WRITTEN
}

/**
 * @returns A random question format category (written or multiple choice).
 */
function get_rand_question_category(): QuestionCategory {
    const MULTIPLE_CHOICE_QUESTIONS = [
        QuestionType.MULTIPLE_CHOICE_FR_TO_EN,
        QuestionType.MULTIPLE_CHOICE_EN_TO_FR
    ];
    const WRITTEN_QUESTIONS = [
        QuestionType.WRITTEN_EN_TO_FR,
        QuestionType.WRITTEN_FR_TO_EN,
        QuestionType.NOUN_GENDER_CLASSIFICATION,
        QuestionType.UNCONJUGATED_TO_CONJUGATED,
        QuestionType.CONJUGATED_TO_UNCONJUGATED,
        QuestionType.ADJECTIVE_N_TO_M,
        QuestionType.ADJECTIVE_N_TO_F,
        QuestionType.ADJECTIVE_N_TO_MP,
        QuestionType.ADJECTIVE_N_TO_FP
    ];
    const percentage = MULTIPLE_CHOICE_QUESTIONS.length / WRITTEN_QUESTIONS.length;
    return Math.random() < percentage ? QuestionCategory.MULTIPLE_CHOICE : QuestionCategory.WRITTEN;
}

/**
 * This type is used to represent what the question will be asking. For example,
 * `MULTIPLE_CHOICE_FR_TO_EN` is a multiple choice question which asks the user
 * to translate from French to English.
 */
export enum QuestionType {
    // ----- Multiple Choice Questions -----
    // Multiple choice French to English
    MULTIPLE_CHOICE_FR_TO_EN,
    // Multiple choice English to French
    MULTIPLE_CHOICE_EN_TO_FR,
    // ----- Written Questions -----
    // Written English to French
    WRITTEN_EN_TO_FR,
    // Written French to English
    WRITTEN_FR_TO_EN,
    // Multiple choice noun gender classification
    NOUN_GENDER_CLASSIFICATION,
    // Written unconjugated verb to conjugated
    UNCONJUGATED_TO_CONJUGATED,
    // Written conjugated verb to unconjugated
    CONJUGATED_TO_UNCONJUGATED,
    // Written normal adjective to male singular form
    ADJECTIVE_N_TO_M,
    // Written normal adjective to female singular form
    ADJECTIVE_N_TO_F,
    // Written normal adjective to male plural form
    ADJECTIVE_N_TO_MP,
    // Written normal adjective to female plural form
    ADJECTIVE_N_TO_FP
}

/**
 * @param category The category of the question (multiple-choice or written). If this parameter is
 * null, then the function returns a random format type from any category.
 */
function get_rand_question_format_type(
    category: QuestionCategory | null = null,
    part_of_speech: PartOfSpeech | null = null
): QuestionType {
    let options: QuestionType[] = [];
    if (category === QuestionCategory.MULTIPLE_CHOICE) {
        options.push(QuestionType.MULTIPLE_CHOICE_FR_TO_EN, QuestionType.MULTIPLE_CHOICE_EN_TO_FR);
        if (part_of_speech === PartOfSpeech.NOUN) {
            options.push(QuestionType.NOUN_GENDER_CLASSIFICATION);
        }
    } else if (category === QuestionCategory.WRITTEN) {
        options.push(QuestionType.WRITTEN_EN_TO_FR, QuestionType.WRITTEN_FR_TO_EN);
        if (part_of_speech === PartOfSpeech.VERB) {
            options.push(
                QuestionType.UNCONJUGATED_TO_CONJUGATED,
                QuestionType.CONJUGATED_TO_UNCONJUGATED
            );
        } else if (part_of_speech === PartOfSpeech.ADJECTIVE) {
            options.push(
                QuestionType.ADJECTIVE_N_TO_M,
                QuestionType.ADJECTIVE_N_TO_F,
                QuestionType.ADJECTIVE_N_TO_MP,
                QuestionType.ADJECTIVE_N_TO_FP
            );
        }
    } else {
        throw new Error('Invalid category');
    }
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

function get_prompt_from_type(question_type: QuestionType, pronoun: string | null) {
    switch (question_type) {
        case QuestionType.MULTIPLE_CHOICE_FR_TO_EN:
        case QuestionType.MULTIPLE_CHOICE_EN_TO_FR:
        case QuestionType.WRITTEN_EN_TO_FR:
        case QuestionType.WRITTEN_FR_TO_EN:
            return 'Translate';
        case QuestionType.NOUN_GENDER_CLASSIFICATION:
            return 'What is the gender of';
        case QuestionType.UNCONJUGATED_TO_CONJUGATED:
            return `Conjugate with ${pronoun}`;
        case QuestionType.CONJUGATED_TO_UNCONJUGATED:
            return 'What is the unconjugated form of';
        case QuestionType.ADJECTIVE_N_TO_M:
            return 'What is the male agreement form for';
        case QuestionType.ADJECTIVE_N_TO_F:
            return 'What is the female agreement form for';
        case QuestionType.ADJECTIVE_N_TO_MP:
            return 'What is the plural male agreement form for';
        case QuestionType.ADJECTIVE_N_TO_FP:
            return 'What is the plural female agreement form for';
    }
}

interface TermAndAnswer {
    term: string;
    answer: string;
}

/**
 * Given the infomration about a term, returns the apropriate answer as an object containing the term
 * and the answer.
 */
function get_answer(
    card: FlashCardData,
    question_type: QuestionType,
    pronoun: ConjugationPronoun | null
): TermAndAnswer {
    switch (question_type) {
        case QuestionType.MULTIPLE_CHOICE_FR_TO_EN:
        case QuestionType.WRITTEN_FR_TO_EN:
            return { term: card.fr, answer: card.en };
        case QuestionType.MULTIPLE_CHOICE_EN_TO_FR:
        case QuestionType.WRITTEN_EN_TO_FR:
            return { term: card.en, answer: card.fr };
        case QuestionType.NOUN_GENDER_CLASSIFICATION:
            return { term: card.fr, answer: card.noun_gender };
        case QuestionType.UNCONJUGATED_TO_CONJUGATED:
            return {
                term: card.fr,
                answer: get_conjugation_from_verb_conjugations(card.verb_conjugations, pronoun)
            };
        case QuestionType.CONJUGATED_TO_UNCONJUGATED:
            return {
                term: get_conjugation_from_verb_conjugations(card.verb_conjugations, pronoun),
                answer: card.fr
            };
        case QuestionType.ADJECTIVE_N_TO_M:
            return { term: card.fr, answer: card.adjective_forms.male };
        case QuestionType.ADJECTIVE_N_TO_F:
            return { term: card.fr, answer: card.adjective_forms.female };
        case QuestionType.ADJECTIVE_N_TO_MP:
            return { term: card.fr, answer: card.adjective_forms.male_plural };
        case QuestionType.ADJECTIVE_N_TO_FP:
            return { term: card.fr, answer: card.adjective_forms.female_plural };
        default:
            return { term: '', answer: '' };
    }
}

/**
 * Type used for representing all of the data needed to render a question.
 */
export interface Question {
    category: QuestionCategory;
    question_type: QuestionType;
    term: string;
    answer: string;
    prompt: string;
}

/**
 * @returns A random question format which can be either a written question or a multiple-choice question.
 */
export function generate_random_question(card: FlashCardData): Question {
    const category = get_rand_question_category();
    const question_type = get_rand_question_format_type(category, card.part_of_speech);
    const pronoun =
        question_type === QuestionType.CONJUGATED_TO_UNCONJUGATED
            ? get_random_pronoun_enum()
            : null;
    let { term, answer } = get_answer(card, question_type, pronoun);
    return {
        term,
        answer,
        prompt: get_prompt_from_type(question_type, pronoun_enum_to_str(pronoun)),
        category,
        question_type
    };
}

/**
 * Create a new `Question` object using the parameters.
 */
export function new_question(term: string, answer: string, question_type: QuestionType): Question {
    const category = [
        QuestionType.MULTIPLE_CHOICE_EN_TO_FR,
        QuestionType.MULTIPLE_CHOICE_FR_TO_EN
    ].includes(question_type)
        ? QuestionCategory.MULTIPLE_CHOICE
        : QuestionCategory.WRITTEN;
    const pronoun =
        question_type === QuestionType.CONJUGATED_TO_UNCONJUGATED ? get_random_pronoun_str() : null;
    return {
        category,
        question_type,
        term,
        answer,
        prompt: get_prompt_from_type(question_type, pronoun)
    };
}

export interface QuestionCardPair {
    question: Question;
    card: FlashCardData;
}
