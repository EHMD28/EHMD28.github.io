import {
	type FlashCardData,
	new_flashcard_data,
	PartOfSpeech,
	NounGender,
	type VerbConjugations,
	type AdjectiveForms,
	new_conjugations,
	new_adjective_forms
} from './types';

export function parse_flashcards_csv(text: string): FlashCardData[] {
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
	console.debug(`reading line: ${line}`);
	for (let i = 0; i < headers.length; i++) {
		switch (headers[i]) {
			case 'term':
				ret.fr = parts[i];
				break;
			case 'definition':
				ret.en = parts[i];
				break;
			case 'term_type':
				ret.part_of_speech = parts[i] as PartOfSpeech;
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
