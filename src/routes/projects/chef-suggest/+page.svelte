<script>
    import { resolve } from "$app/paths";
    import "../projects.css";
</script>

<svelte:head>
    <title>Chef Suggest | Projects</title>
</svelte:head>

<article>
    <h1>Chef Suggest</h1>
    <p>
        Chef Suggest is a meal suggestion app I created for my mom because she
        had a hard time figuring out what to make every week. It was originally
        a Python desktop application made using <a
            href="https://pypi.org/project/PyQt5/">PyQt5</a
        >, but I then migrated the codebase to Kotlin using the
        <a href="https://docs.oracle.com/javase/tutorial/uiswing/">Swing</a>
        library. I switched to Kotlin because I wanted to also create an accompanying
        Android app. Since the Android app is currently a WIP, I created a
        <a href={resolve("/programs/chef-suggest")}>small web program</a> which can
        be used in the mean time. I am going to use Compose Multiplatform so I can
        build to multiple platforms from a single codebase.
    </p>
    <br />
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LSzt79io9Co?si=uWbDSzkdnjyVEdEj"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
