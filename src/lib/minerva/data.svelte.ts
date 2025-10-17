import {
	new_adjective_forms,
	new_conjugations,
	new_flashcard_data,
	NounGender,
	PartOfSpeech,
	type AdjectiveForms,
	type FlashCardData,
	type VerbConjugations
} from './types';
import flash_cards from '$lib/minerva/data/flashcards.json';
import type { FetchFunction } from 'vite';

export const GlobalFlashcards = $state(flash_cards as FlashCardData[]);

export const GlobalTags = $state([...new Set(flash_cards.map((v) => v.tags).flat())]);

export function get_random_card(): FlashCardData | null {
	if (GlobalFlashcards.length === 0) return null;
	let index = Math.floor(Math.random() * GlobalFlashcards.length);
	return GlobalFlashcards[index];
}

// /**
//  * Fetches flashcards csv from server and parses it. Returns null if an error occurs.
//  */
// export async function get_cards_from_server(fetch_fn: FetchFunction): Promise<FlashCardData[]> {
// 	const URL = '/minerva/flashcards.csv';
// 	try {
// 		const response = await fetch(URL);
// 		if (!response.ok) throw new Error(`Response Status: ${response.status}`);
// 		const content = await response.text();
// 		return parse_flashcards_csv(content);
// 	} catch (error) {
// 		return Promise.reject(error);
// 	}
// }
