<script>
    import { resolve } from "$app/paths";
</script>

<nav class="dark">
    <h1>EHMD28 Personal Website</h1>
    <div id="quick-links-container">
        <a href={resolve("/")}>Home</a>
        <a href={resolve("/projects")}>Projects</a>
        <a href={resolve("/programs")}>Programs</a>
        <a href={resolve("/about")}>About</a>
    </div>
</nav>

<style>
    nav {
        display: flex;
        flex: 0 1 auto;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 2vh 2vw;

        background-color: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
    }

    #quick-links-container {
        display: flex;
        justify-content: space-between;

        width: 25%;
    }

    a {
        color: var(--md-sys-color-on-primary-container);

        transition: translate 1s;
    }

    a:hover {
        text-decoration: underline;

        transform: translateY(-5px);
    }
</style>
