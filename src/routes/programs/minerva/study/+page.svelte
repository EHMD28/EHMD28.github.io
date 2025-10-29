<script lang="ts">
	import MockQuestions from '$lib/minerva/components/testing/MockQuestions.svelte';
	import type { FlashCardData } from '$lib/minerva/scripts/types.js';

	interface Props {
		flash_cards: FlashCardData[];
	}

	let { flash_cards }: Props = $props();
	const questions: FlashCardData[] = [];
</script>

<h1>Study (Étudier)</h1>
<MockQuestions {flash_cards} />

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
