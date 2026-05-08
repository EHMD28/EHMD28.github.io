<svelte:head>
    <title>Cosmo | Projects</title>
</svelte:head>

<article>
    <h1>Cosmo Text Editor</h1>
    <p>
        <a href="https://github.com/EHMD28/cosmo-text-editor">Cosmo</a>
        is the first non-trivial Rust program I finished. Cosmo is a modal text editor
        with a terminal-based user interface. I was inspired to create this project
        trying to figure out how editors like Vim and Emacs worked. I originally
        planned to write my own ANSI escape code library called Lamertin, but I decided
        against it in favor of using the Ratatui library. It's fairly minimal in
        terms of features, and the control scheme could definitely be improved, but
        I learned what I wanted to learn, so I consider the project a success. I
        plan to apply these skills to creating a terminal user-interface for my card
        game,
        <a href="https://github.com/EHMD28/kingdom-kards" target="_blank"
            >Kingdom Kards</a
        > (spelling intentional). At the time of writing, the Kingdom Kards game
        server is still a work in progress.
    </p>
    <br />
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sLS0zSbOcWU?si=vtrHcqKFENGMpdLd"
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
