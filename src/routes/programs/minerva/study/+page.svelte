<script lang="ts">
	import MockQuestions from '$lib/minerva/components/testing/MockQuestions.svelte';
	import Navigator from '$lib/minerva/components/ui/Navigator.svelte';
	import type { FlashCardData } from '$lib/minerva/scripts/types.js';
	import type { PageProps } from './$types';

	interface Props {
		flash_cards: FlashCardData[];
	}

	let { data }: PageProps = $props();
	let { result: flash_cards, error } = data;
	const questions: FlashCardData[] = [];
</script>

<h1>Study (Étudier)</h1>
<Navigator />
<MockQuestions {flash_cards} />

<style>
	h1 {
		margin-bottom: 5vh;
	}
</style>
