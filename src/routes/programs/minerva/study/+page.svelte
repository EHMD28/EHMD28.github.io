<script lang="ts">
	import QuestionComponent from '$lib/minerva/question_types/QuestionComponent.svelte';
	import { new_question, QuestionType, type FlashCardData } from '$lib/minerva/types';
	import { onMount } from 'svelte';

	let question_one = new_question('le chat', 'cat', QuestionType.WRITTEN_FR_TO_EN);
	let question_two = new_question('le chat', 'cat', QuestionType.MULTIPLE_CHOICE_FR_TO_EN);

	let { data } = $props();

	onMount(() => {
		let first = data.result[0];
		console.log(`${first.term} -> ${first.definition}`);
		// get_cards_from_server()
		// 	.then((data) => console.log(JSON.stringify(data, null, 2)))
		// 	.catch((error) => console.trace(`Error: ${error}`));
	});
</script>

<h1>Study (Étudier)</h1>

<QuestionComponent data={question_one} />
<QuestionComponent data={question_two} />

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
