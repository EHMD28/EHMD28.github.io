<script lang="ts">
	import type { Meal } from '$lib/chef-suggest/types.js';

	let { data } = $props();
	let allMeals: Meal[] = data.meals;
	let displayedMeals: Meal[] = $state([]);
	let numMeals = $state(5);
	generateMeals();

	function setIsLocked(index: number) {
		if (typeof displayedMeals[index] === 'string') return;
		let meal = displayedMeals[index];
		meal.isLocked = !meal.isLocked;
	}

	function generateMeals() {
		let generated: Meal[] = [];
		for (let meal of displayedMeals) {
			if (meal.isLocked) {
				generated.push(meal);
			}
		}
		let i = 0;
		let numLeftToGenerate = numMeals - generated.length;
		while (i < numLeftToGenerate) {
			let randIndex = Math.floor(Math.random() * allMeals.length);
			let randMeal = allMeals[randIndex];
			if (!generated.some((m) => m.name === randMeal.name)) {
				generated.push(randMeal);
				i++;
			}
		}
		displayedMeals = generated;
	}
</script>

<main>
	<ol id="meals-list">
		{#each displayedMeals as meal, index}
			<div>
				<li class="meals-list-name-text">{meal.name}</li>
				<label for="is-locked-checkbox" class="is-locked-checkbox-label">Locked: </label>
				<input
					type="checkbox"
					name="is-locked-checkbox"
					class="is-locked-checkbox"
					checked={meal.isLocked}
					onchange={() => setIsLocked(index)}
				/>
			</div>
		{/each}
	</ol>
	<div id="controls-container">
		<div id="num-meals-container">
			<label for="num-meals-input">Number of Meals to Generate</label>
			<input
				type="number"
				name="num-meals-input"
				id="num-meals-input"
				min={1}
				max={100}
				bind:value={numMeals}
			/>
		</div>
		<button id="generate-button" type="button" onclick={generateMeals}>Generate New Meals</button>
	</div>
</main>

<style>
	main {
		margin: 5vh 5vw;
	}

	.meals-list-name-text {
		font-size: 2em;
		margin: 2vh 0;
	}

	.is-locked-checkbox-label {
		font-size: 1.5em;
		margin-right: 1vw;
	}

	.is-locked-checkbox {
		transform: scale(1.5);
	}

	#controls-container {
		margin: 4vh 0;
		height: 2.5vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5vw;
	}

	#controls-container * {
		font-size: 1.2em;
	}

	#num-meals-container {
		display: grid;
		grid-template-columns: auto auto;
		column-gap: 2.5vw;
		align-items: center;
	}
</style>
