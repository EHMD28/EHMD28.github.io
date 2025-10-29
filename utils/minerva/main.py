# This file is a helper tool for converting from a list of JSON FlashCardData objects
# to CSV format. 

import json
import sys
from typing import TypedDict

class Conjugations(TypedDict):
    je: str
    tu: str
    il: str
    vous: str
    nous: str
    ils: str

class AdjectiveForms(TypedDict):
    m: str
    f: str
    mp: str
    fp: str

class Flashcard(TypedDict):
    term: str
    definition: str
    term_type: str
    noun_gender: str | None
    verb_conjugations: Conjugations | None
    adjective_forms: AdjectiveForms | None
    tags: list[str]


def main():
    with open(sys.argv[1], 'r') as f:
        cards: list[Flashcard] = json.load(f)
    with open(sys.argv[2], "w") as f:
        separator = ','
        newline = '\n'
        keys = cards[0].keys()
        header = separator.join(keys)
        f.write(header + newline)
        for card in cards:
            line: str = ""
            value: str = ""
            for i, key in enumerate(keys):
                if card[key] is None:
                    value = ""
                elif isinstance(card[key], dict):
                    key_pairs = [f'{k}:{v}' for k, v in card[key].items()]
                    value = ';'.join(key_pairs)
                elif isinstance(card[key], list):
                    value = ';'.join(card[key])
                else:
                    value = card[key]
                line += str(value) + (newline if i == len(keys) - 1 else separator)
            f.write(line)


if __name__ == "__main__":
    main()
