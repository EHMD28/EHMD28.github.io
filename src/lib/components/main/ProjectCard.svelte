<script lang="ts">
    import type { ProjectData } from "$lib";

    interface Props {
        data: ProjectData;
    }

    let { data }: Props = $props();
</script>

<div class="project-card dark">
    <h3>{data.title}</h3>
    <img src={data.imageUrl} alt={`${data.title}`} />
    <p>{data.description}</p>
</div>

<style>
    .project-card {
        display: grid;
        grid-template-rows: 10% 40% 50%;
        gap: 15px;
        justify-content: center;

        width: 100%;
        aspect-ratio: 3 / 4;
        border-radius: 15%;

        border: 2px solid var(--md-sys-color-outline);
    }

    .project-card > h3 {
        height: 100%;
        width: 100%;

        font-size: 100%;
        text-align: center;
        vertical-align: baseline;
        align-content: center;
    }

    .project-card > img {
        width: 100%;
    }

    .project-card > p {
        padding: 0 10px;

        font-size: 90%;
    }
</style>
