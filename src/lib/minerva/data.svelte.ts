import { type FlashCardData } from './types';
import flash_cards from '$lib/minerva/data/flashcards.json';

export const GlobalFlashcards = $state(flash_cards as FlashCardData[]);

export const GlobalTags = $state([...new Set(flash_cards.map((v) => v.tags).flat())]);

export function get_random_card(): FlashCardData | null {
	if (GlobalFlashcards.length === 0) return null;
	let index = Math.floor(Math.random() * GlobalFlashcards.length);
	return GlobalFlashcards[index];
}
