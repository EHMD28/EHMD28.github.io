<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';
	import { BoardState, LOGO_PATH_TO_ID_MAP } from '$lib/lang_game/index';

	interface Props {
		position: number;
		x: number;
		y: number;
		path: string | null;
	}

	let { position, x, y, path }: Props = $props();

	function dragover_handler(ev: DragEvent) {
		ev.preventDefault();
		if (ev.dataTransfer !== null) {
			ev.dataTransfer.dropEffect = 'move';
		}
	}

	function drop_handler(ev: DragEvent) {
		ev.preventDefault();
		if (ev.dataTransfer !== null && path === null) {
			path = ev.dataTransfer.getData('text/plain');
			BoardState[position - 1] = path;
			let old_image = document.getElementById(LOGO_PATH_TO_ID_MAP[path]);
			old_image?.parentNode?.removeChild(old_image);
		}
	}

	function mouseover_handler(ev: MouseEvent) {
		let card = document.getElementById(`hint-${position}`);
		if (card != null) {
			card.style.borderColor = 'orange';
			for (let child of card.children) {
				(child as HTMLElement).style.color = 'black';
			}
			card.style.backgroundColor = 'rgb(240, 240, 240)';
		}
	}

	function mouseout_handler(ev: MouseEvent) {
		let card = document.getElementById(`hint-${position}`);
		if (card != null) {
			card.style.borderColor = 'black';
			for (let child of card.children) {
				(child as HTMLElement).style.color = 'whitesmoke';
			}
			card.style.background = 'none';
		}
	}

	let main_element: HTMLElement;

	onMount(() => {
		let observer = new MutationObserver(() => {
			if (main_element.childElementCount === 0) {
				path = null;
				BoardState[position] = null;
			}
		});
		observer.observe(main_element, { childList: true });
	});
</script>

<div
	id="space-{position}"
	class="space"
	style="left: {x}in; top: {y}in;"
	ondragover={dragover_handler}
	ondrop={drop_handler}
	onmouseover={mouseover_handler}
	onmouseout={mouseout_handler}
	onfocus={() => {}}
	onblur={() => {}}
	role="application"
	bind:this={main_element}
>
	{#if path !== null}
		<Logo src={path} />
	{:else}
		{position}
	{/if}
</div>

<style>
	.space {
		/* Appearance */
		color: black;
		background-color: rgb(234, 234, 234);
		border: 1px solid black;
		width: 0.625in;
		height: 0.625in;
		border-radius: 50%;
		/* Positioning */
		position: absolute;
		display: inline-block;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.space:hover {
		background: rgb(200, 200, 200);
		border: 1px solid orange;
	}
</style>
