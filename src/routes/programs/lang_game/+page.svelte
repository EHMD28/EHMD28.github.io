<script lang="ts">
	import { checkBoardState, HINT_CARDS, LOGO_PATH_TO_ID_MAP } from '$lib/lang_game/index';
	import HintCard from '$lib/lang_game/HintCard.svelte';
	import Logo from '$lib/lang_game/Logo.svelte';
	import BoardSpace from '$lib/lang_game/Space.svelte';
	import b_logo from '$lib/assets/lang_game/logos/b.png';
	import c_logo from '$lib/assets/lang_game/logos/c.png';
	import cpp_logo from '$lib/assets/lang_game/logos/cpp.png';
	import cs_logo from '$lib/assets/lang_game/logos/cs.png';
	import go_logo from '$lib/assets/lang_game/logos/go.png';
	import java_logo from '$lib/assets/lang_game/logos/java.png';
	import js_logo from '$lib/assets/lang_game/logos/js.png';
	import php_logo from '$lib/assets/lang_game/logos/php.png';
	import py_logo from '$lib/assets/lang_game/logos/py.png';
	import rust_logo from '$lib/assets/lang_game/logos/rust.png';
	import ts_logo from '$lib/assets/lang_game/logos/ts.png';
	import { mount } from 'svelte';

	let tokens_container: HTMLElement;

	function dragover_handler(ev: DragEvent) {
		ev.preventDefault();
		if (ev.dataTransfer !== null) {
			ev.dataTransfer.dropEffect = 'move';
		}
	}

	function drop_handler(ev: DragEvent) {
		ev.preventDefault();
		if (ev.dataTransfer !== null) {
			let path = ev.dataTransfer.getData('text/plain');
			let old_logo = document.getElementById(LOGO_PATH_TO_ID_MAP[path]);
			old_logo?.parentElement?.removeChild(old_logo);
			mount(Logo, {
				target: tokens_container,
				props: {
					src: path
				}
			});
		}
	}

	function button_handler(ev: Event) {
		let result = checkBoardState();
		let message = result ? 'Correct' : 'Incorrect';
		window.alert(message);
	}
</script>

<button type="button" onclick={button_handler}>Check</button>
<div>
	<div id="board-container">
		<div id="board">
			<img id="c-logo" src={c_logo} alt="" width="40" />
			<BoardSpace position={1} x={2.2} y={0.45} path={null} />
			<BoardSpace position={2} x={0.85} y={0.26} path={null} />
			<BoardSpace position={3} x={3.27} y={1.79} path={null} />
			<BoardSpace position={4} x={3.27} y={2.73} path={null} />
			<BoardSpace position={5} x={1.83} y={3.56} path={null} />
			<BoardSpace position={6} x={2.88} y={4.73} path={null} />
			<BoardSpace position={7} x={0.94} y={4.73} path={null} />
			<BoardSpace position={8} x={0.29} y={3.35} path={null} />
			<BoardSpace position={9} x={0.29} y={2.25} path={null} />
			<BoardSpace position={10} x={0.29} y={0.93} path={null} />
		</div>
		<div
			id="tokens-container"
			ondragover={dragover_handler}
			ondrop={drop_handler}
			bind:this={tokens_container}
			role="application"
		>
			<Logo src={b_logo} />
			<Logo src={cpp_logo} />
			<Logo src={cs_logo} />
			<Logo src={go_logo} />
			<Logo src={java_logo} />
			<Logo src={js_logo} />
			<Logo src={php_logo} />
			<Logo src={py_logo} />
			<Logo src={rust_logo} />
			<Logo src={ts_logo} />
		</div>
	</div>
	<div id="cards-container">
		{#each HINT_CARDS as card}
			<HintCard data={card} />
		{/each}
	</div>
</div>

<style>
	div#board-container {
		display: inline-block;
	}

	div#board {
		display: inline-block;
		background-image: url('$lib/assets/lang_game/board-image.png');
		background-repeat: no-repeat;
		background-size: contain;
		width: 4.25in;
		height: 5.5in;
		border: 4px solid black;
		position: relative;
		margin-bottom: 10px;
		margin-right: 10px;
	}

	#c-logo {
		position: absolute;
		left: 1.92in;
		top: 2.33in;
	}

	#tokens-container {
		display: inline-flex;
		flex-direction: column;
		vertical-align: top;
		align-items: center;
		justify-content: center;
		width: 0.8in;
		height: 5.35in;
		justify-content: space-around;
		background: rgb(225, 225, 225);
		border: 2px solid black;
		padding: 10px;
	}

	#cards-container {
		display: inline-grid;
		vertical-align: top;
		margin-left: 10px;
		grid-template-columns: auto auto auto auto auto;
		column-gap: 5px;
		row-gap: 5px;
	}

	button {
		color: black;
		width: 2in;
		height: 0.5in;
		font-size: 20pt;
		margin-bottom: 10px;
	}
</style>
