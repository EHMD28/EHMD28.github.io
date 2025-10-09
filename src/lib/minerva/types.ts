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
 * The type used for representing an entire flashcard. The `term_type` property should correspond
 * with which other member of the object is not null. For example, if `term_type` is `NOUN`, then
 * only `noun_gender` should be not `null`. All other sub-values should be `null`.
 */
export interface FlashCardData {
	term: string;
	definition: string;
	term_type: PartOfSpeech;
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
export function new_flashcard_data(): FlashCardData {
	return {
		term: '',
		definition: '',
		term_type: PartOfSpeech.NOUN,
		noun_gender: null,
		verb_conjugations: null,
		adjective_forms: null,
		tags: []
	};
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
	return Math.random() < 0.5 ? QuestionCategory.MULTIPLE_CHOICE : QuestionCategory.WRITTEN;
}

/**
 * This type is used to represent what the question will be asking. For example,
 * `MULTIPLE_CHOICE_FR_TO_EN` is a multiple choice question which asks the user
 * to translate from French to English.
 */
export enum QuestionType {
	MULTIPLE_CHOICE_FR_TO_EN,
	MULTIPLE_CHOICE_EN_TO_FR,
	WRITTEN_EN_TO_FR,
	WRITTEN_FR_TO_EN,
	NOUN_GENDER_CLASSIFICATION,
	UNCONJUGATED_TO_CONJUGATED,
	CONJUGATED_TO_UNCONJUGATED,
	ADJECTIVE_N_TO_M,
	ADJECTIVE_N_TO_F,
	ADJECTIVE_N_TO_MP,
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
	let options: QuestionType[];
	if (category === null) {
		options = [
			QuestionType.MULTIPLE_CHOICE_FR_TO_EN,
			QuestionType.MULTIPLE_CHOICE_EN_TO_FR,
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
	} else if (category === QuestionCategory.MULTIPLE_CHOICE) {
		options = [QuestionType.MULTIPLE_CHOICE_FR_TO_EN, QuestionType.MULTIPLE_CHOICE_EN_TO_FR];
	} else if (category === QuestionCategory.WRITTEN) {
		options = [
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
	}
	let index = Math.floor(Math.random() * options.length);
	return options[index];
}

function get_prompt_from_type(question_type: QuestionType) {
	switch (question_type) {
		case QuestionType.MULTIPLE_CHOICE_FR_TO_EN:
		case QuestionType.MULTIPLE_CHOICE_EN_TO_FR:
		case QuestionType.WRITTEN_EN_TO_FR:
		case QuestionType.WRITTEN_FR_TO_EN:
			return 'Translate';
		case QuestionType.NOUN_GENDER_CLASSIFICATION:
			return 'What is the gender of';
		case QuestionType.UNCONJUGATED_TO_CONJUGATED:
			return 'Conjugate';
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
export function generate_random_question(
	term: string,
	answer: string,
	part_of_speech: PartOfSpeech
): Question {
	const category = get_rand_question_category();
	const question_type = get_rand_question_format_type(category, part_of_speech);
	return {
		term,
		answer,
		prompt: get_prompt_from_type(question_type),
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
	return {
		category,
		question_type,
		term,
		answer,
		prompt: get_prompt_from_type(question_type)
	};
}
