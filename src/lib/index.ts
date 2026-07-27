import csmgImage from "$lib/assets/main/projects/thumbnails/color-sequence-memory-game-schematic.png";
import cosmoImage from "$lib/assets/main/projects/thumbnails/cosmo-ui.png";
import mcalc4Image from "$lib/assets/main/projects/thumbnails/mcalc4-ui.png";
import eosExplorerImage from "$lib/assets/main/projects/thumbnails/eos-explorer-ui.png";
import chefSuggestImage from "$lib/assets/main/projects/thumbnails/chef-suggest-logo.png"
import langGameImage from "$lib/assets/main/projects/thumbnails/lang-game-ui.png";
import alphansoRoverImage from "$lib/assets/main/projects/thumbnails/alphanso-model.png";
import fidgetGearsImage from "$lib/assets/main/projects/thumbnails/fidget-gears-model.png";
import articulatedSnakeImage from "$lib/assets/main/projects/thumbnails/articulated-snake-assembly.png";
import phoneStandImage from "$lib/assets/main/projects/thumbnails/phone-holder-model.png";
import { resolve } from "$app/paths";

type ProgrammingLanguage = "c" | "c++" | "python" | "kotlin" | "rust" | "java" | "javascript" | "typescript";
type PlatformsAndFrameworks = "sveltekit" | "streamlit" | "android" | "arduino" | "stm32" | "esp32";
type Topics = "robotics" | "math" | "physics" | "electronics" | "simulation" | "3D-model";
type UserInterface = "cli" | "tui" | "mobile" | "desktop" | "web";
type AllowedTags = ProgrammingLanguage | PlatformsAndFrameworks | Topics | UserInterface;

export interface ProjectData {
    title: string;
    imageUrl: string;
    articleLink: string;
    description: string;
    githubLink: string | null;
    demoLink: string | null;
    tags: AllowedTags[];
}

export const ALL_PROJECTS: ProjectData[] = [
    {
        title: "M-Calculator",
        description: "M-Calculator version 4 is a CLI scientific calculator written in C. The calculator supports arithmetic, trigonometric functions, logarithms, mathematical constants, and variables.",
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
        description: "Cosmo is a terminal-based text editor written in Rust using Ratatui. The application supports unicode and modal editing.",
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
    },
    {
        title: "Chef Suggest",
        description: "Chef Suggest is a meal generation program. There is a desktop version and an Anroid app.",
        githubLink: "https://github.com/EHMD28/ChefSuggest/",
        // TODO: Remove Chef Suggest program.
        demoLink: resolve("/programs/chef-suggest"),
        tags: ["kotlin", "android"],
        imageUrl: chefSuggestImage,
        articleLink: resolve("/projects/chef-suggest"),
    },
    {
        title: "Programming Language Game",
        imageUrl: langGameImage,
        articleLink: resolve("/projects/lang-game"),
        description: "This is a web application I made over the summer for a high school summer independent research project. The goal of the game is to identify which programming language corresponds to which space using the relationships between spaces and hint cards.",
        githubLink: "https://github.com/EHMD28/SummerProject2025",
        demoLink: resolve("/programs/lang-game"),
        tags: ["sveltekit", "typescript", "web"]
    },
    {
        title: "Alphanso Rover",
        imageUrl: alphansoRoverImage,
        articleLink: resolve("/projects/alphanso-rover"),
        description: "Alphanso is a remote-controlled, mecanum-wheeled robot I designed and built. It was the first every robot I designed and build by myself.",
        githubLink: "https://github.com/EHMD28/alphanso-robot",
        demoLink: null,
        tags: ["c++", "esp32", "electronics", "3D-model"]
    },
    {
        title: "Articulated Snake Fidget",
        imageUrl: articulatedSnakeImage,
        articleLink: resolve("/projects/articulated-snake-fidget"),
        description: "This is an articulated snake fidget toy I modeled and 3D printed for a high-shool project",
        githubLink: null,
        demoLink: "https://cad.onshape.com/documents/a0e0aa9482a9b371aa4e7fe3/w/8b2cf2efb04eb8e2b11fd173/e/1ba6562c2f40b2d722ed71f3",
        tags: ["3D-model"]
    },
    {
        title: "Fidget Gears",
        imageUrl: fidgetGearsImage,
        articleLink: resolve("/projects/fidget-gears"),
        description: "This is a fidget toy I modeled, 3D printed, and assembled for a high-school project. As far as I'm aware, there aren't any fidgets currently in production like it.",
        githubLink: null,
        demoLink: "https://cad.onshape.com/documents/413b5accd4f124c48387a272/w/e612d159e318ca2afd3dec7a/e/23b827e035004fa0e8020706",
        tags: ["3D-model"]
    },
    {
        title: "Phone Stand",
        imageUrl: phoneStandImage,
        articleLink: resolve("/projects/phone-stand"),
        description: "This is a phone stand I modeled and 3D printed. I'm currently on the third iteration, which supports landscape and portrait viewing.",
        githubLink: null,
        demoLink: "https://cad.onshape.com/documents/3692fd8283749f1231d02d31/w/7369b6c27ec4a162ffb5f7c5/e/511b92571ed69e0dc9b81097",
        tags: ["3D-model"]
    }
]
