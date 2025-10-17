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

export const GlobalFlashcards = $state(flash_cards as FlashCardData[]);

export const GlobalTags = $state([...new Set(flash_cards.map((v) => v.tags).flat())]);

export function get_random_card(): FlashCardData | null {
	if (GlobalFlashcards.length === 0) return null;
	let index = Math.floor(Math.random() * GlobalFlashcards.length);
	return GlobalFlashcards[index];
}

/**
 * Fetches flashcards csv from server and parses it. Returns null if an error occurs.
 */
export async function get_cards_from_server(): Promise<FlashCardData[]> | null {
	const URL = '/minerva/flashcards.csv';
	try {
		const response = await fetch(URL);
		if (!response.ok) throw new Error(`Response Status: ${response.status}`);
		const content = await response.text();
		return parse_flashcards_csv(content);
	} catch (error) {
		return Promise.reject(error);
	}
}

function parse_flashcards_csv(text: string): FlashCardData[] {
	const lines = text.split('\n');
	/* Extracts the header row from the CSV. */
	if (lines.length < 2) throw new Error('CSV file too short.');
	const headers = lines.splice(0, 1)[0].split(',');
	const cards = lines.filter((line) => line.length !== 0).map((line) => parse_line(line, headers));
	return cards;
}

function parse_line(line: string, headers: string[]): FlashCardData {
	let ret = new_flashcard_data();
	let parts = line.split(',');
	console.log(`reading line: ${line}`);
	for (let i = 0; i < headers.length; i++) {
		switch (headers[i]) {
			case 'term':
				ret.term = parts[i];
				break;
			case 'definition':
				ret.definition = parts[i];
				break;
			case 'term_type':
				ret.term_type = parts[i] as PartOfSpeech;
				break;
			case 'noun_gender':
				ret.noun_gender = parts[i] as NounGender;
				break;
			case 'verb_conjugations':
				ret.verb_conjugations = parse_dict(parts[i], headers[i]) as VerbConjugations;
				break;
			case 'adjective_forms':
				ret.adjective_forms = parse_dict(parts[i], headers[i]) as AdjectiveForms;
				break;
			case 'tags':
				ret.tags = parse_array(parts[i]);
				break;
		}
	}
	return ret;
}

/**
 * Parses a dictionary stored in the format `key1:val1;key2:val2;...`. The `header` paramter
 * is the name of the column the cell is in.
 */
function parse_dict(cell: string, header: string): VerbConjugations | AdjectiveForms | null {
	/* Empty cells should be interpereted as null. */
	if (cell.length === 0) return null;
	/* Get the appopriate keys for each possible return type. */
	// TODO: Move vc_keys and af_keys to different file.
	const vc_keys = Object.keys(new_conjugations());
	const af_keys = Object.keys(new_adjective_forms());
	/* Key-Value pairs are delimited using the semicolon character. */
	const kv_pairs = cell.split(';');
	let ret = {};
	for (let pair of kv_pairs) {
		let [k, v] = pair.split(':');
		/* If the key is invalid, return null. */
		let valid_keys = header === 'verb_conjugations' ? vc_keys : af_keys;
		if (!valid_keys.includes(k)) return null;
		ret[k] = v;
	}
	if (header === 'verb_conjugations') {
		return ret as VerbConjugations;
	} else {
		return ret as AdjectiveForms;
	}
}

function parse_array(cell: string): string[] {
	if (cell.length === 0) return [];
	else return cell.split(';');
}
