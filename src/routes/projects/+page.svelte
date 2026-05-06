<script lang="ts">
    import { ALL_PROJECTS } from "$lib";
    import ProjectCard from "$lib/components/main/ProjectCard.svelte";
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<div id="project-cards-container">
    {#each ALL_PROJECTS as project}
        <ProjectCard data={project} />
    {/each}
</div>

<style>
    #project-cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, 300px);
        gap: 25px 75px;
        align-content: center;
        justify-content: center;
    }
</style>
