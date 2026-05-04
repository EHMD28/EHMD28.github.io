type ProgrammingLanguage = "c" | "c++" | "python" | "kotlin" | "rust" | "java" | "svelte" | "javascript" | "typescript";
type PlatformsAndFrameworks = "sveltekit" | "streamlit" | "compose" | "arduino" | "stm32" | "esp32";
type Topics = "robotics" | "math" | "physics" | "electronics" | "simulation";
type UserInterface = "cli" | "tui" | "mobile" | "desktop" | "web";
type AllowedTags = ProgrammingLanguage | PlatformsAndFrameworks | Topics | UserInterface;

interface ProjectData {
    title: string;
    imageUrl: string;
    description: string;
    github_link: string;
    demo_link: string | null;
    tags: AllowedTags[];
}

const ALL_PROJECTS: ProjectData[] = [
    {
        title: "M-Calculator 4",
        description: "M-Calculator 4 is a CLI scientific calculator written in C. The calculator supports arithmetic, trigonometric functions, logarithms, mathematical constants, and variables.",
        github_link: "https://github.com/EHMD28/m-calc_ver.4",
        demo_link: null,
        tags: ["c", "cli"],
        imageUrl: ""
    },
    {
        title: "EoS Explorer",
        description: "EoS Explorer is a web application for studying the equation of state of neutron-star matter.",
        github_link: "https://github.com/EHMD28/EOS-explorer",
        demo_link: "https://ehmd28-eos-explorer.streamlit.app/",
        tags: ["python", "physics", "web", "streamlit"],
        imageUrl: ""
    },
    {
        title: "Cosmo",
        description: "Cosmo is a terminal-based text edtior à la Vim or Emacs.",
        github_link: "https://github.com/EHMD28/cosmo-text-editor",
        demo_link: null,
        tags: ["rust", "tui"],
        imageUrl: ""
    },
    {
        title: "Color Sequence Memory Game",
        description: "This is a clone of the Simon game I made using an Arduino and basic electrical components.",
        github_link: "https://github.com/EHMD28/DesignFinalProject",
        demo_link: null,
        tags: ["c++", "arduino", "electronics"],
        imageUrl: ""
    }
]
