<script lang="ts">
	interface Props {
		term: string;
		answer: string;
		option_one: string;
		option_two: string;
		option_three: string;
		option_four: string;
	}

	const { term, answer }: Props = $props();
	let options = [answer, 'to read', 'to write', 'to run'];

	function select_option_handler(ev: Event) {
		const button = ev.currentTarget as HTMLButtonElement;
		const selected = button.innerText;
		button.style.background = selected === answer ? 'green' : 'red';
		button.disabled = true;
	}
</script>

<div class="question-container">
	<div class="question-text">Define {term}</div>
	<div class="options-container">
		{#each options as option}
			<button type="button" onclick={select_option_handler}>{option}</button>
		{/each}
		<!-- <button class="opt-one" onclick={select_option_handler}>{}</button>
		<button class="opt-two" onclick={select_option_handler}>{}</button>
		<button class="opt-three" onclick={select_option_handler}>{}</button>
		<button class="opt-four" onclick={select_option_handler}>{}</button> -->
	</div>
</div>

<style>
	.question-container {
		padding: 1vh 1vw;
		border: 2px solid white;
		font-size: 16pt;
	}

	.question-text {
		margin-top: 5vh;
		text-align: center;
		vertical-align: middle;
	}

	.options-container {
		display: grid;
		grid-template-columns: auto auto;
		margin-top: 5vh;
		row-gap: 2vh;
	}

	.options-container > button {
		text-align: center;
		background: none;
		color: white;
		font-size: 16pt;
		border: 2px solid white;
		margin: 2vh 2vw;
		padding: 2vh 2vw;
	}

	.options-container > button:hover {
		border: 2px solid rgb(146, 146, 255);
		cursor: pointer;
	}
</style>
