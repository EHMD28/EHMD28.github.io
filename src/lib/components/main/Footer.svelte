<script>
    import githubLogo from "$lib/assets/main/logos/github-brands-solid.svg";
</script>

<footer class="dark">
    <a href="https://github.com/EHMD28" target="_blank">
        <img src={githubLogo} width={48} alt="" />
        <span>Github</span>
    </a>
</footer>

<style>
    footer {
        flex: 0 1 auto;

        padding: 2vh 2vw;

        background-color: var(--md-sys-color-surface-container-highest);
        color: var(--md-sys-color-on-surface);
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        color: var(--md-sys-color-on-primary-container);
    }

    a > img {
        padding: 2px;
        border-radius: 50%;

        background-color: white;
    }
</style>
