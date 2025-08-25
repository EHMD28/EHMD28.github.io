<script lang="ts">
	import { LOGO_PATH_TO_ID_MAP } from '$lib/lang_game/index';

	interface Props {
		src: string;
	}

	let { src }: Props = $props();

	function dragstart_handler(ev: DragEvent) {
		ev.dataTransfer?.setData('text/uri-list', src);
		ev.dataTransfer?.setData('text/plain', src);
		if (ev.dataTransfer !== null) {
			ev.dataTransfer.effectAllowed = 'move';
		}
	}

	function get_image_width(): number {
		switch (LOGO_PATH_TO_ID_MAP[src]) {
			case 'java':
				return 35;
			case 'php':
			case 'go':
				return 45;
			default:
				return 30;
		}
	}
</script>

<img
	id={LOGO_PATH_TO_ID_MAP[src]}
	{src}
	width={get_image_width()}
	alt=""
	draggable="true"
	ondragstart={dragstart_handler}
/>

<style>
	img {
		cursor: grab;
	}
</style>
