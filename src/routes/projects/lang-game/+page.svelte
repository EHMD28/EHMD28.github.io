<script>
    import { resolve } from "$app/paths";
    import "../projects.css";
</script>

<svelte:head>
    <title>Programming Language Game | Projects</title>
</svelte:head>

<article>
    <h1>Programming Language Game</h1>
    <p>
        I made an <a href="https://github.com/EHMD28/SummerProject2025"
            >online board game</a
        >
        for an independent summer research project I had to do for school. The project
        was open-ended, so I decided to research the history of programming languages.
        I then made a board game where the objective is to match tiles to spaces
        using hint cards and a relationship diagram between the different spaces.
        The demo is available
        <a href={resolve("/programs/lang-game")}>here</a>.
    </p>
    <br />
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/URuhZ4BOC-M?si=UxeXIqpnbpJS5YZc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
</article>
