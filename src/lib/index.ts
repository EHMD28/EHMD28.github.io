import csmgImage from "$lib/assets/main/projects/color-sequence-memory-game-schematic.png";
import cosmoImage from "$lib/assets/main/projects/cosmo-ui.png";
import mcalc4Image from "$lib/assets/main/projects/mcalc4-ui.png";
import eosExplorerImage from "$lib/assets/main/projects/eos-explorer-ui.png";
import { resolve } from "$app/paths";

type ProgrammingLanguage = "c" | "c++" | "python" | "kotlin" | "rust" | "java" | "svelte" | "javascript" | "typescript";
type PlatformsAndFrameworks = "sveltekit" | "streamlit" | "compose" | "arduino" | "stm32" | "esp32";
type Topics = "robotics" | "math" | "physics" | "electronics" | "simulation";
type UserInterface = "cli" | "tui" | "mobile" | "desktop" | "web";
type AllowedTags = ProgrammingLanguage | PlatformsAndFrameworks | Topics | UserInterface;

export interface ProjectData {
    title: string;
    imageUrl: string;
    articleLink: string;
    description: string;
    githubLink: string;
    demoLink: string | null;
    tags: AllowedTags[];
}

export const ALL_PROJECTS: ProjectData[] = [
    {
        title: "M-Calculator 4",
        description: "M-Calculator 4 is a CLI scientific calculator written in C. The calculator supports arithmetic, trigonometric functions, logarithms, mathematical constants, and variables.",
        githubLink: "https://github.com/EHMD28/m-calc_ver.4",
        demoLink: null,
        tags: ["c", "cli"],
        imageUrl: mcalc4Image,
        articleLink: resolve("/projects/mcalc4")
    },
    {
        title: "EoS Explorer",
        description: "EoS Explorer is a web application for studying the equation of state of neutron-star matter.",
        githubLink: "https://github.com/EHMD28/EOS-explorer",
        demoLink: "https://ehmd28-eos-explorer.streamlit.app/",
        tags: ["python", "physics", "web", "streamlit"],
        imageUrl: eosExplorerImage,
        articleLink: resolve("/projects/eos-explorer")
    },
    {
        title: "Cosmo",
        description: "Cosmo is a terminal-based text edtior written in Rust using Ratatui. The application supports unicode and modal editing.",
        githubLink: "https://github.com/EHMD28/cosmo-text-editor",
        demoLink: null,
        tags: ["rust", "tui"],
        imageUrl: cosmoImage,
        articleLink: resolve("/projects/cosmo")
    },
    {
        title: "Color Sequence Memory Game",
        description: "This is a clone of the Simon game I made using an Arduino and basic electrical components.",
        githubLink: "https://github.com/EHMD28/DesignFinalProject",
        demoLink: null,
        tags: ["c++", "arduino", "electronics"],
        imageUrl: csmgImage,
        articleLink: resolve("/projects/color-sequence-memory-game")
    }
]
