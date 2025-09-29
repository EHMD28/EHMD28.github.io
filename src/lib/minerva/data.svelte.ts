import { type FlashCardData } from './types';
import flash_cards from '$lib/minerva/data/flashcards.json';

export const GlobalFlashcards = $state(flash_cards as FlashCardData[]);

export const GlobalTags = $state([...new Set(flash_cards.map((v) => v.tags).flat())]);

export function print_global_flashcards() {
	for (const [i, value] of flash_cards.entries()) {
		console.log(`${i}: ${value.term}`);
	}
	console.log('---------------------------');
}
