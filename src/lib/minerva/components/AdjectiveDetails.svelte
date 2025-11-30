<script lang="ts">
	import type { AdjectiveForms } from '$lib/minerva/scripts/types';

	let { forms }: { forms: AdjectiveForms } = $props();
</script>

<!-- TODO: Make state reactive for these values -->
<div class="adjective-forms-container">
	<div>
		<label for="m-adj">Male:</label>
		<input type="text" name="m-adj" id="m-adj" bind:value={forms.male} />
	</div>
	<div>
		<label for="mp-adj">Male Plural:</label>
		<input type="text" name="mp-adj" id="mp-adj" bind:value={forms.male_plural} />
	</div>
	<div>
		<label for="f-adj">Female:</label>
		<input type="text" name="f-adj" id="f-adj" bind:value={forms.female} />
	</div>
	<div>
		<label for="fp-adj">Female Plural:</label>
		<input type="text" name="fp-adj" id="fp-adj" bind:value={forms.female_plural} />
	</div>
</div>

<style>
	input {
		font-size: 12pt;
		padding-left: 5px;
	}

	.adjective-forms-container {
		display: grid;
		grid-template-columns: auto auto auto auto;
	}
</style>
