<script>
    import "../projects.css";
</script>

<svelte:head>
    <title>EoS Explorer | Projects</title>
</svelte:head>

<article>
    <h1>EoS Explorer</h1>
    <p>
        <a href="https://github.com/EHMD28/EOS-explorer" target="_blank"
            >EoS Explorers</a
        >
        is an interactive physics web applet I created using Python as part of my
        high school capstone project. I worked with a physicist at The Ohio State
        University whose research specialty is the a property of
        <a href="https://en.wikipedia.org/wiki/Neutron_star" target="_blank"
            >neutron-star</a
        >
        matter called the
        <a
            href="https://en.wikipedia.org/wiki/Equation_of_state"
            target="_blank">equation of state</a
        >. The goal of my project was to create an application which allows the
        user to tune the parameters for a given equation of state and check the
        validity of that equation of state using observational constraints. This
        was my first foray into college-level physics and my first experience
        building any kind of interactive physics application.
    </p>
    <br />
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0gWpjPOc558?si=rk92oY--CTkC4fT0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
    <br />
    <p>
        Through this project, I learned how to use <a
            href="https://scipy.org/"
            target="_blank">SciPy</a
        >, <a href="https://numpy.org" target="_blank">NumPy</a>,
        <a href="https://shapely.readthedocs.io/en/stable/" target="_blank"
            >Shapely</a
        >
        (all for computation),
        <a href="https://matplotlib.org/" target="_blank">Matplotlib</a>
        (for figure generation),
        <a href="https://streamlit.io/" target="_blank">Streamlit</a> (for the UI),.
        There is unfortunately some slowdown which comes from both the choice of
        language and how Streamlit handles UI changes. While I did enjoy using Streamlit
        because I didn't really have to write UI code, I admit that it could definitely
        have a more efficient model than re-running the entire app when the user
        makes a change. As an aside, OBS gave everything a purple hue, which is odd,
        since both my browser and the UI use shades of blue. Everything looked fine
        when recording, so I'm not sure what happened.
    </p>
</article>
