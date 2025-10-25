<script lang="ts">
	import {
		MOCK_NOUN_WRITTEN_EN_TO_FR_QUESTION,
		MOCK_NOUN_CARD,
		MOCK_NOUN_WRITTEN_FR_TO_EN_QUESTION,
		MOCK_VERB_WRITTEN_QUESTION,
		MOCK_VERB_CARD,
		MOCK_ADJECTIVE_WRITTEN_QUESTION,
		MOCK_ADJECTIVE_CARD,
		MOCK_NOUN_MULTIPLE_CHOICE_FR_TO_EN_QUESTION,
		MOCK_NOUN_MULTIPLE_CHOICE_EN_TO_FR_QUESTION,
		MOCK_NOUN_GENDER_QUESTION
	} from '$lib/minerva/scripts/mock_data';
	import type { FlashCardData } from '$lib/minerva/scripts/types';
	import QuestionComponent from '../question_types/QuestionComponent.svelte';

	let { flash_cards }: { flash_cards: FlashCardData[] } = $props();
</script>

<QuestionComponent
	question={MOCK_NOUN_MULTIPLE_CHOICE_FR_TO_EN_QUESTION}
	card={MOCK_NOUN_CARD}
	{flash_cards}
/>
<QuestionComponent
	question={MOCK_NOUN_MULTIPLE_CHOICE_EN_TO_FR_QUESTION}
	card={MOCK_NOUN_CARD}
	{flash_cards}
/>
<QuestionComponent question={MOCK_NOUN_GENDER_QUESTION} card={MOCK_NOUN_CARD} {flash_cards} />
<QuestionComponent
	question={MOCK_NOUN_WRITTEN_EN_TO_FR_QUESTION}
	card={MOCK_NOUN_CARD}
	{flash_cards}
/>
<QuestionComponent
	question={MOCK_NOUN_WRITTEN_FR_TO_EN_QUESTION}
	card={MOCK_NOUN_CARD}
	{flash_cards}
/>
<QuestionComponent question={MOCK_VERB_WRITTEN_QUESTION} card={MOCK_VERB_CARD} {flash_cards} />
<QuestionComponent
	question={MOCK_ADJECTIVE_WRITTEN_QUESTION}
	card={MOCK_ADJECTIVE_CARD}
	{flash_cards}
/>
