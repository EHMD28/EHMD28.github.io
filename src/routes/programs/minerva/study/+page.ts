import { parse_flashcards_csv } from '$lib/minerva/parse_csv';
import type { FlashCardData } from '$lib/minerva/types.js';

export async function load({ fetch }) {
	const URL = '/minerva/flashcards.csv';
	let result: FlashCardData[];
	let error: Error;
	try {
		const response = await fetch(URL);
		if (!response.ok) throw new Error(`Response Status: ${response.status}`);
		const content = await response.text();
		result = parse_flashcards_csv(content);
	} catch (e) {
		error = e;
	}
	return {
		result,
		error
	};
}
