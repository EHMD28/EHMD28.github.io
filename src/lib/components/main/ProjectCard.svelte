<script lang="ts">
    interface Props {
        data: ProjectData;
    }

    let { data }: Props = $props();
</script>

<div class="project-card">
    <h3>{data.title}</h3>
    <img src={data.imageUrl} alt={`${data.title}`} />
    <p>{data.description}</p>
</div>

<style>
    .project-card {
        border: 1px solid black;
    }
</style>
