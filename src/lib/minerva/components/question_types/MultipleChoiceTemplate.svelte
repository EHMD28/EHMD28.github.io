<script lang="ts">
    import { QuestionType, type FlashCardData, type Question } from '$lib/minerva/scripts/types';

    interface Props {
        question: Question;
        card: FlashCardData;
        flash_cards: FlashCardData[];
    }

    let { question, card, flash_cards }: Props = $props();
    let { term, answer, prompt } = $derived(question);
    const question_options = get_options();
    let options_container: HTMLElement;

    function fischer_yates_shuffle<T>(arr: Array<T>) {
        for (let i = arr.length - 1; i > 0; i--) {
            let random = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[random]] = [arr[random], arr[i]];
        }
    }

    function get_options(): string[] {
        let options: string[];
        if (question.question_type === QuestionType.NOUN_GENDER_CLASSIFICATION) {
            options = ['Male', 'Female'];
        } else {
            options = [question.answer];
            // The question is a multiple choice translation question.
            let similar_cards = flash_cards.filter(
                (v) => v.part_of_speech === card.part_of_speech && v.fr !== card.fr
            );
            if (similar_cards.length < 3)
                similar_cards = flash_cards.filter((v) => v.fr !== card.fr);
            fischer_yates_shuffle(similar_cards);
            const key =
                question.question_type === QuestionType.MULTIPLE_CHOICE_FR_TO_EN ? 'en' : 'fr';
            // Select the first three, randomly selected, elements of similar cards and adds them to options.
            const chosen = similar_cards.slice(0, 3).map((v) => v[key]);
            options.push(...chosen);
            // Moves answer to a random position so it isn't always first.
            const rand_index = Math.floor(Math.random() * options.length);
            [options[0], options[rand_index]] = [options[rand_index], options[0]];
        }
        return options;
    }

    function check_answer(selected: string): boolean {
        if (question.question_type === QuestionType.NOUN_GENDER_CLASSIFICATION) {
            return selected.charAt(0).toLowerCase() === card.noun_gender;
        } else {
            return selected === answer;
        }
    }

    function select_option_handler(ev: Event) {
        const button = ev.currentTarget as HTMLButtonElement;
        const selected = button.innerText;
        // button.style.background = selected === answer ? 'green' : 'red';
        if (check_answer(selected)) {
            button.style.background = 'green';
            for (let btn of options_container.children) {
                (btn as HTMLButtonElement).disabled = true;
            }
        } else {
            button.style.background = 'red';
        }
    }

    function DEBUG() {
        console.debug(`Card: ${card.fr} = ${card.en} | Question: ${question.term}`);
        console.debug(`Flash Cards: ${flash_cards.map((v) => v.fr)}`);
        console.debug('----------------------------------------------------');
    }
</script>

<button onclick={DEBUG}>Debug (Multiple Choice)</button>
<div class="question-container">
    <div class="question-text">{prompt}: {term}</div>
    <div class="options-container" bind:this={options_container}>
        {#each question_options as option}
            <button type="button" onclick={select_option_handler}>{option}</button>
        {/each}
    </div>
</div>

<style>
    .question-container {
        margin: 5vh 0;
        padding: 1vh 1vw;
        border: 2px solid white;
        font-size: 16pt;
    }

    .question-text {
        margin-top: 5vh;
        text-align: center;
        vertical-align: middle;
    }

    .options-container {
        display: grid;
        grid-template-columns: auto auto;
        margin-top: 5vh;
        row-gap: 2vh;
    }

    .options-container > button {
        text-align: center;
        background: none;
        color: white;
        font-size: 16pt;
        border: 2px solid white;
        margin: 2vh 2vw;
        padding: 2vh 2vw;
    }

    .options-container > button:hover {
        border: 2px solid rgb(146, 146, 255);
        cursor: pointer;
    }
</style>
