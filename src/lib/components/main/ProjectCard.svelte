<script lang="ts">
    import type { ProjectData } from "$lib";

    interface Props {
        data: ProjectData;
    }

    const { data }: Props = $props();

    function getDemoLinkTarget(): "_self" | "_blank" {
        return data.demoLink?.includes("programs/") ? "_self" : "_blank";
    }
</script>

<div class="project-card dark">
    <h3>{data.title}</h3>
    <img src={data.imageUrl} alt={`${data.title}`} />
    <p>{data.description}</p>
    <div class="card-links">
        <a href={data.articleLink}>Article</a>
        <a href={data.githubLink} target="_blank">GitHub</a>
        {#if data.demoLink !== null}
            <a href={data.demoLink} target={getDemoLinkTarget()}>Demo</a>
        {/if}
    </div>
</div>

<style>
    .project-card {
        display: grid;
        grid-template-rows: auto auto 1fr auto;
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
        overflow-y: auto;

        scrollbar-width: thin;
        scrollbar-color: var(--md-sys-color-outline) transparent;
    }

    .card-links {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        padding: 15px 0;
    }

    .card-links > a {
        color: var(--md-sys-color-on-surface-variant);

        transition: transform 500ms;
    }

    .card-links a:hover {
        transform: translateY(-5px);
    }
</style>
