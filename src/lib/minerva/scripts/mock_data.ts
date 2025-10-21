import {
	QuestionCategory,
	QuestionType,
	type FlashCardData,
	type NounGender,
	type PartOfSpeech,
	type Question
} from './types';

export const MOCK_NOUN_CARD: FlashCardData = {
	fr: 'le chat',
	en: 'cat',
	part_of_speech: 'noun' as PartOfSpeech,
	noun_gender: 'm' as NounGender,
	verb_conjugations: null,
	adjective_forms: null,
	tags: ['beginner', 'animal']
};

export const MOCK_NOUN_WRITTEN_QUESTION: Question = {
	category: QuestionCategory.WRITTEN,
	question_type: QuestionType.WRITTEN_FR_TO_EN,
	term: MOCK_NOUN_CARD.fr,
	answer: MOCK_NOUN_CARD.en,
	prompt: 'Translate'
};

export const MOCK_VERB_CARD: FlashCardData = {
	fr: 'parler',
	en: 'to speak',
	part_of_speech: 'verb' as PartOfSpeech,
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
};

export const MOCK_VERB_WRITTEN_QUESTION: Question = {
	category: QuestionCategory.WRITTEN,
	question_type: QuestionType.WRITTEN_EN_TO_FR,
	term: MOCK_VERB_CARD.en,
	answer: MOCK_VERB_CARD.fr,
	prompt: 'Translate'
};

export const MOCK_ADJECTIVE_CARD: FlashCardData = {
	fr: 'petit',
	en: 'small',
	part_of_speech: 'adjective' as PartOfSpeech,
	noun_gender: null,
	verb_conjugations: null,
	adjective_forms: {
		male: 'petit',
		female: 'petite',
		male_plural: 'petits',
		female_plural: 'petites'
	},
	tags: ['beginner']
};

export const MOCK_ADJECTIVE_WRITTEN_QUESTION: Question = {
	category: QuestionCategory.WRITTEN,
	question_type: QuestionType.WRITTEN_EN_TO_FR,
	term: MOCK_ADJECTIVE_CARD.en,
	answer: MOCK_ADJECTIVE_CARD.fr,
	prompt: 'Translate'
};

export const mock_adverb_card: FlashCardData = {
	fr: 'rarement',
	en: 'rarely',
	part_of_speech: 'adverb' as PartOfSpeech,
	noun_gender: null,
	verb_conjugations: null,
	adjective_forms: null,
	tags: ['beginner']
};

export const MOCK_ADVERB_QUESTION: Question = {
	category: QuestionCategory.MULTIPLE_CHOICE,
	question_type: QuestionType.MULTIPLE_CHOICE_FR_TO_EN,
	term: '',
	answer: '',
	prompt: ''
};
