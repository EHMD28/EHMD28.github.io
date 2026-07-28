<script>
    import "../projects.css";
    import modelImage from "$lib/assets/main/projects/thumbnails/articulated-snake-assembly.png";
    import printImage from "$lib/assets/main/projects/physical/articulated-snake.jpg";
</script>

<article>
    <h1>Articulated Snake Fidget</h1>
    <p>
        I created the fidget for a high school engineering class project. The
        objective of the project was to design something which can only be
        manufactured as one piece using additive manufacturing methods. I
        decided on the articulated snake idea on a whim, but it ended up being
        relative easy to design. I also ended up printing it. It took a while
        for the friction from the supports to lessen, but it turned out really
        well. The full model is available <a
            href="https://cad.onshape.com/documents/a0e0aa9482a9b371aa4e7fe3/w/8b2cf2efb04eb8e2b11fd173/e/1ba6562c2f40b2d722ed71f3"
            target="_blank">on Onshape</a
        >.
    </p>
    <br />
    <div class="row">
        <img
            src={modelImage}
            width={400}
            alt="Articulated snake fidget 3D model."
        />
        <img
            src={printImage}
            width={400}
            alt="3D-printed articulated snake fidget."
        />
    </div>
    <!-- TODO: Add video -->
    <!-- TODO: Add technical drawings -->
</article>
