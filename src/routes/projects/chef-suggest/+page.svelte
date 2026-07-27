<script>
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
        Android app. Below is a demo of the desktop app.
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
    <br />
    <p>
        I also created an Android application using the Jetpack libraries,
        primarily Jetpack Compose, to serve the same purpose. I was originally
        planning to have a single codebase for both the desktop and mobile
        version using Compose Multiplatform. However, since my mother's computer
        broke, it didn't make sense to invest the time and effort. Since I
        created it much later, the Android app has a much more modern-looking
        user interface and is more fully featured. I did remove the ability to
        edit meals in app, since my mom said she didn't use that feature.
        Instead, the meal data is fetched from a Google Sheets document which
        can be fetched statically as a TSV file. Currently, there is one one
        column, but more can be added in the future if necessary. Below is a
        demo of the mobile app.
    </p>
    <br />
    <iframe
        width="315"
        height="560"
        src="https://www.youtube.com/embed/iTkBJM5ifKY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
