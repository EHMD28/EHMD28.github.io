import csmgImage from "$lib/assets/main/projects/color-sequence-memory-game-schematic.png";
import cosmoImage from "$lib/assets/main/projects/cosmo-ui.png";
import mcalc4Image from "$lib/assets/main/projects/mcalc4-ui.png";
import eosExplorerImage from "$lib/assets/main/projects/eos-explorer-ui.png";

type ProgrammingLanguage = "c" | "c++" | "python" | "kotlin" | "rust" | "java" | "svelte" | "javascript" | "typescript";
type PlatformsAndFrameworks = "sveltekit" | "streamlit" | "compose" | "arduino" | "stm32" | "esp32";
type Topics = "robotics" | "math" | "physics" | "electronics" | "simulation";
type UserInterface = "cli" | "tui" | "mobile" | "desktop" | "web";
type AllowedTags = ProgrammingLanguage | PlatformsAndFrameworks | Topics | UserInterface;

export interface ProjectData {
    title: string;
    imageUrl: string;
    description: string;
    github_link: string;
    demo_link: string | null;
    tags: AllowedTags[];
}

export const ALL_PROJECTS: ProjectData[] = [
    {
        title: "M-Calculator 4",
        description: "M-Calculator 4 is a CLI scientific calculator written in C. The calculator supports arithmetic, trigonometric functions, logarithms, mathematical constants, and variables.",
        github_link: "https://github.com/EHMD28/m-calc_ver.4",
        demo_link: null,
        tags: ["c", "cli"],
        imageUrl: mcalc4Image
    },
    {
        title: "EoS Explorer",
        description: "EoS Explorer is a web application for studying the equation of state of neutron-star matter.",
        github_link: "https://github.com/EHMD28/EOS-explorer",
        demo_link: "https://ehmd28-eos-explorer.streamlit.app/",
        tags: ["python", "physics", "web", "streamlit"],
        imageUrl: eosExplorerImage
    },
    {
        title: "Cosmo",
        description: "Cosmo is a terminal-based text edtior à la Vim or Emacs.",
        github_link: "https://github.com/EHMD28/cosmo-text-editor",
        demo_link: null,
        tags: ["rust", "tui"],
        imageUrl: cosmoImage
    },
    {
        title: "Color Sequence Memory Game",
        description: "This is a clone of the Simon game I made using an Arduino and basic electrical components.",
        github_link: "https://github.com/EHMD28/DesignFinalProject",
        demo_link: null,
        tags: ["c++", "arduino", "electronics"],
        imageUrl: csmgImage
    }
]
