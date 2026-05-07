<script>
    import emailLogo from "$lib/assets/main/logos/envelope-regular-full.svg";
    import githubLogo from "$lib/assets/main/logos/github-brands-solid.svg";
</script>

<footer class="dark">
    <a class="link" href="mailto:ehmdiagne0530@gmail.com" target="_blank">
        <img src={emailLogo} width={48} alt="" />
        <span>Email: ehmdiagne0530@gmail.com</span>
    </a>
    <a class="link" href="https://github.com/EHMD28" target="_blank">
        <img src={githubLogo} width={48} alt="" />
        <span>Github</span>
    </a>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: row;
        gap: 50px;

        padding: 2vh 2vw;

        background-color: var(--md-sys-color-surface-container-highest);
        color: var(--md-sys-color-on-surface);
    }

    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        color: var(--md-sys-color-on-primary-container);
    }

    .link > img {
        padding: 2px;
        border-radius: 50%;

        background-color: white;
    }
</style>
