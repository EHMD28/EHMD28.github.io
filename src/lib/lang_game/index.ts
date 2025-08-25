import b_logo from '$lib/assets/lang_game/logos/b.png';
import c_logo from '$lib/assets/lang_game/logos/c.png';
import cpp_logo from '$lib/assets/lang_game/logos/cpp.png';
import cs_logo from '$lib/assets/lang_game/logos/cs.png';
import go_logo from '$lib/assets/lang_game/logos/go.png';
import java_logo from '$lib/assets/lang_game/logos/java.png';
import js_logo from '$lib/assets/lang_game/logos/js.png';
import php_logo from '$lib/assets/lang_game/logos/php.png';
import py_logo from '$lib/assets/lang_game/logos/py.png';
import rust_logo from '$lib/assets/lang_game/logos/rust.png';
import ts_logo from '$lib/assets/lang_game/logos/ts.png';

export interface HintCardType {
	hint_num: number;
	hint_one: string;
	hint_two: string;
	hint_three: string;
}

export const HINT_CARDS: HintCardType[] = [
	{
		hint_num: 1,
		hint_one: 'C is the successor to 1.',
		hint_two: '1 shares a creator with 2.',
		hint_three: '1 inspired the name of C.'
	},
	{
		hint_num: 2,
		hint_one: "2's syntax is inspired by C.",
		hint_two: '2 shares a creator with 1.',
		hint_three: '2 was developed at Google.'
	},
	{
		hint_num: 3,
		hint_one: 'The offiical interperter for 3 is written in C.',
		hint_two: '3 has an indentation-based syntax.',
		hint_three: '3 is the second most-used language in the world.'
	},
	{
		hint_num: 4,
		hint_one: 'The official interepeter is written in C.',
		hint_two: '4 has a C-like syntax.',
		hint_three: '4 can be embedded into HTML.'
	},
	{
		hint_num: 5,
		hint_one: '5 is C with object-oriented programming.',
		hint_two: 'The majority of C code is valid 5 code.',
		hint_three: '5 is the primary language used for programming Arduinos.'
	},
	{
		hint_num: 6,
		hint_one: '6 is a memory safe alterative to 5.',
		hint_two: '6 is the first language used in the Linux kernel except C.',
		hint_three: "6's mascot is a crab."
	},
	{
		hint_num: 7,
		hint_one: '7 is inspired by 8 and 5.',
		hint_two: '7 has a very similar syntax to 8',
		hint_three: '7 was developed at Microsoft'
	},
	{
		hint_num: 8,
		hint_one: '8 was inspired by 5.',
		hint_two: '8 heavily uses object-oriented programming.',
		hint_three: '8 was the primary language for Android development.'
	},
	{
		hint_num: 9,
		hint_one: "9's name was inspired by 8.",
		hint_two: "9's syntax was inspired by C.",
		hint_three: '9 is the primary language used for web development.'
	},
	{
		hint_num: 10,
		hint_one: '10 is 9 with type safety added.',
		hint_two: '10 was developed at Microsoft.',
		hint_three: '10 transpiles to 9.'
	}
];

export const LOGO_PATH_TO_ID_MAP = {
	[b_logo]: 'b',
	[c_logo]: 'c',
	[cpp_logo]: 'cpp',
	[cs_logo]: 'cs',
	[go_logo]: 'go',
	[java_logo]: 'java',
	[js_logo]: 'js',
	[php_logo]: 'php',
	[py_logo]: 'py',
	[rust_logo]: 'rust',
	[ts_logo]: 'ts'
};

export let BoardState: Array<string | null> = new Array(10).fill(null);

export function checkBoardState(): boolean {
	let logos = [
		b_logo,
		go_logo,
		py_logo,
		php_logo,
		cpp_logo,
		rust_logo,
		cs_logo,
		java_logo,
		js_logo,
		ts_logo
	];
	let correct: number[] = [];
	let incorrect: number[] = [];
	if (BoardState.length === logos.length) {
		for (let i = 0; i < BoardState.length; i++) {
			if (BoardState[i] !== logos[i]) {
				incorrect.push(i);
			} else {
				correct.push(i);
			}
		}
	}

	for (let index of correct) {
		let element = document.getElementById(`space-${index + 1}`);
		if (element !== null) {
			element.style.borderColor = 'green';
		}
	}

	for (let index of incorrect) {
		let element = document.getElementById(`space-${index + 1}`);
		if (element !== null) {
			element.style.borderColor = 'red';
		}
	}

	if (correct.length === 10) {
		return true;
	} else {
		return false;
	}
}
