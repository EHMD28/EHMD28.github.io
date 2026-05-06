<script lang="ts">
    import type { ProjectData } from "$lib";

    interface Props {
        data: ProjectData;
    }

    let { data }: Props = $props();
</script>

<a class="project-card dark" href={data.fullPageLink}>
    <h3>{data.title}</h3>
    <img src={data.imageUrl} alt={`${data.title}`} />
    <p>{data.description}</p>
</a>

<style>
    .project-card {
        display: grid;
        grid-template-rows: auto auto 1fr;
        gap: 10px;
        justify-content: center;

        width: 100%;
        aspect-ratio: 3 / 4;
        border-radius: 10%;

        border: 2px solid var(--md-sys-color-outline);
        background-color: var(--md-sys-color-surface-container-highest);
        color: var(--md-sys-color-on-surface-variant);

        transition: background-color 500ms;
    }

    .project-card:hover {
        background-color: var(--md-sys-color-secondary-container);

        cursor: pointer;
    }

    .project-card > h3 {
        height: 100%;
        width: 100%;
        padding: 5px 0;

        font-size: 100%;
        text-align: center;
        vertical-align: baseline;
        align-content: center;
    }

    .project-card > img {
        width: 100%;

        border-top: 2px solid var(--md-sys-color-outline);
        border-bottom: 2px solid var(--md-sys-color-outline);
    }

    .project-card > p {
        justify-self: end;

        padding: 10px 10px;
    }
</style>
