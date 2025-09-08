<script lang="ts">
	import type { NounGender } from '$lib/types';

	let { gender }: { gender: NounGender } = $props();
</script>

<label for="noun-gender">Gender</label>
<select name="noun-gender" id="noun-gender" bind:value={gender}>
	<option value="m">Male</option>
	<option value="f">Female</option>
</select>

<style>
	select {
		font-size: 12pt;
		color: black;
	}
</style>
