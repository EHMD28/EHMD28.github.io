<svelte:head>
    <title>M-Calculator 4 | Projects</title>
</svelte:head>

<article>
    <h1>M-Calculator Version 4</h1>

    <p>
        <a href="https://github.com/EHMD28/m-calc_ver.4" target="_blank"
            >M-Calculator Version 4</a
        >
        is the fourth iteration of my first non-trivial C project. It is a command-line
        scientific calculator which can either be run using command-line arguments
        are in read-eval-print loop (REPL) mode. The calculator uses a
        <a
            href="https://en.wikipedia.org/wiki/Recursive_descent_parser"
            target="_blank">recursive-descent parser</a
        > to evaluate expressions. The calculator supports arithmetic operations,
        order of operations, exponentiation, logarithms, trigonometric functions,
        variables, and constants (e and &pi;).
    </p>
    <br />
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/M9nEc2sN2iw?si=wqtIesxi0clZ46EG"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
    <br />
    <p>
        I started this project because I wanted to start learning about compiler
        design, and I figured they best way to do that is by learning how to
        tokenize and parse a mathematical expression. I do still plan to make my
        own programming language and compiler, but I have taken a break from
        that goal to focus on other projects. When I do get around to writing a
        compiler, I want to use Rust, because string parsing in C is a massive
        pain. In fact, this project led to me writing to helper libraries: <a
            href="https://github.com/EHMD28/m-logging">M-Logging</a
        >
        for logging and
        <a href="https://github.com/EHMD28/arachne-strlib">Arachne</a> for string
        handling.
    </p>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
