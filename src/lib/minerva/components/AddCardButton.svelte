<script lang="ts">
	import { new_flashcard_data, type FlashCardData } from '$lib/minerva/scripts/types';

	let { flash_cards }: { flash_cards: FlashCardData[] } = $props();

	function on_click() {
		flash_cards.push(new_flashcard_data());
	}
</script>

<button class="add-card" onclick={on_click}>Add Card</button>

<style>
	button.add-card {
		width: 30vw;
		height: 50px;
		margin: 5vh 35vw;
		margin-top: 0;
		padding: 5px;

		background: none;
		color: white;
		border: 2px solid white;
		font-size: 24pt;
	}

	button.add-card:hover {
		border: 2px solid blue;
		cursor: pointer;
	}
</style>
