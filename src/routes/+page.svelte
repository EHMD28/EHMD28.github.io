<script>
    import { resolve } from "$app/paths";
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<article>
    <header>
        <h1>Welcome to my website</h1>
    </header>
    <main>
        <p>
            My name is El Hajj Malick Diagne, and I am an amateur engineer and
            physicist. My main interests are in robotics, control systems,
            electronics, and computational physics. I am currently an
            early-college experience student at The Ohio State University and a
            member of First Robotics Team 3324, The Metrobots. My goal is to
            major in robotics engineering, if the university offers it, or
            electrical and computer engineering. I am always looking to learn
            something new and expand my skill set. I am currently learning how
            to design printed circuit boards and create mobile apps using
            Jetpack Compose.
        </p>
        <br />
        <p>
            In terms of programming languages, I mainly use Rust, Kotlin, and
            Python, but I am also proficient in C, C++, Java, and TypeScript.
            While web and app development aren't personal interests of mine, I
            am comfortable using SvelteKit to build websites, such as this one.
            I have experience working with multiple popular microcontroller
            families including Arduino, ESP32, and STM32 development boards. I
            am also experienced at using Onshape for 3D CAD work. You can see a
            full list of my projects <a href={resolve("/projects")}>here</a>.
        </p>
    </main>
</article>

<style>
    h1 {
        text-align: center;
    }
</style>
