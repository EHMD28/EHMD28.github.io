// @ts-nocheck
import { parse_flashcards_csv } from '$lib/minerva/scripts/parse_csv';
import type { FlashCardData } from '$lib/minerva/scripts/types.js';
import type { LayoutLoad } from './$types';

export const load = async ({ fetch }: Parameters<LayoutLoad>[0]) => {
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
};
