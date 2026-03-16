<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
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

	function getMealsAsText() {
		let today = new Date().toLocaleDateString();
		let textLines = [`Meals for ${today}`];
		for (let i = 0; i < displayedMeals.length; i++) {
			textLines.push(`${i + 1}. ${displayedMeals[i].name}`);
		}
		let text = textLines.join('\n');
		text = text.concat('\n');
		return text;
	}

	async function copyMeals() {
		try {
			const text = getMealsAsText();
			await navigator.clipboard.writeText(text);
			alert(`Copied meals to your clipboard.\n${text}`);
		} catch (err) {
			alert(`Your browser does not allow copying text. Error: ${err}`);
		}
	}

	function downloadMeals() {
		let date = new Date().toLocaleDateString();
		// Replace forward slashes with hyphens.
		date = date.replace(/\//g, '-');
		const content = getMealsAsText();
		const file = new File([content], `meals-${date}`, {
			type: 'text/plain'
		});
		const uri = URL.createObjectURL(file);
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = uri;
		a.download = file.name;
		a.click();
		URL.revokeObjectURL(uri);
	}

	function beforeUnload(event: Event) {
		event.preventDefault();
		return '';
	}

	beforeNavigate((nav) => {
		if (!confirm('Do you want to leave? Any changes will be unsaved.')) {
			nav.cancel();
		}
	});
</script>

<svelte:window on:beforeunload={beforeUnload} />

<main>
	<h1>Chef Suggest (Web)</h1>
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
		<button type="button" onclick={generateMeals}>Generate New Meals</button>
		<button type="button" onclick={copyMeals}>Copy Meals</button>
		<button type="button" onclick={downloadMeals}>Download Meals</button>
	</div>
</main>

<style>
	main {
		/* For some reason, extending the margin of the main element isn't behaving in the way I would expect. */
		margin: 0 5vw;
		margin-top: 5vh;
		margin-bottom: 40vh;
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

	button {
		cursor: pointer;
	}
</style>
