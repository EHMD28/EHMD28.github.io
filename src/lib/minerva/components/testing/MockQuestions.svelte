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
		MOCK_NOUN_MULTIPLE_CHOICE_EN_TO_FR_QUESTION
	} from '$lib/minerva/scripts/mock_data';
	import QuestionComponent from '../question_types/QuestionComponent.svelte';
</script>

<QuestionComponent question={MOCK_NOUN_MULTIPLE_CHOICE_FR_TO_EN_QUESTION} card={MOCK_NOUN_CARD} />
<QuestionComponent question={MOCK_NOUN_MULTIPLE_CHOICE_EN_TO_FR_QUESTION} card={MOCK_NOUN_CARD} />
<QuestionComponent question={MOCK_NOUN_WRITTEN_EN_TO_FR_QUESTION} card={MOCK_NOUN_CARD} />
<QuestionComponent question={MOCK_NOUN_WRITTEN_FR_TO_EN_QUESTION} card={MOCK_NOUN_CARD} />
<QuestionComponent question={MOCK_VERB_WRITTEN_QUESTION} card={MOCK_VERB_CARD} />
<QuestionComponent question={MOCK_ADJECTIVE_WRITTEN_QUESTION} card={MOCK_ADJECTIVE_CARD} />
