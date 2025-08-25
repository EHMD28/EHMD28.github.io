<script lang="ts">
	import type { HintCardType } from '$lib/lang_game/index';

	interface Props {
		data: HintCardType;
	}

	let { data }: Props = $props();
</script>

<div id="hint-{data.hint_num}" class="card">
	<div class="card-name">Hint {data.hint_num}</div>
	<div class="hint-one">{data.hint_one}</div>
	<div class="hint-two">{data.hint_two}</div>
	<div class="hint-three">{data.hint_three}</div>
</div>

<style>
	div {
		font-size: 12pt;
	}

	.card {
		display: inline-block;
		vertical-align: top;
		border: 2px solid black;
		height: 2.8in;
		width: 1.5in;
		text-align: center;
		padding: 10px;
		font-family: Arial, Helvetica, sans-serif;
	}

	.card-name {
		height: 10%;
		margin: 5px 0;
	}

	.hint-one,
	.hint-two,
	.hint-three {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30%;
	}

	/* .card-name,
  .hint-one,
  .hint-two,
  .hint-three {
    border-bottom: 1px solid black;
  } */
</style>
