<script>
	import { GlobalFlashcards } from '$lib/data.svelte';
	import { new_flashcard_data } from '$lib/types';

	function on_click() {
		GlobalFlashcards.push(new_flashcard_data());
	}
</script>

<button class="add-card" onclick={on_click}>Add Card</button>

<style>
	button.add-card {
		width: 30vw;
		height: 50px;
		margin: 0 35vw;
		padding: 5px;

		background: none;
		border: 2px solid white;
		font-size: 24pt;
	}

	button.add-card:hover {
		border: 2px solid blue;
		cursor: pointer;
	}
</style>
