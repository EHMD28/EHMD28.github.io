<script lang="ts">
    import QuestionComponent from '$lib/minerva/components/question_types/QuestionComponent.svelte';
    import Navigator from '$lib/minerva/components/ui/Navigator.svelte';
    import { generate_random_question, type QuestionCardPair } from '$lib/minerva/scripts/types.js';
    import type { PageProps } from './$types';
    import { get_random_card } from '$lib/minerva/scripts';

    let { data }: PageProps = $props();
    let { result: flash_cards } = data;
    const question_cards = $state([generate_new_question()]);
    let current_index = $state(0);
    let current_question = $derived(question_cards[current_index]);

    function generate_new_question(): QuestionCardPair {
        let random_card = get_random_card(flash_cards);
        let random_question = generate_random_question(random_card);
        return { card: random_card, question: random_question };
    }

    function handle_next_button() {
        // Checking to see if the user is on the last currently generated question.
        if (current_index >= question_cards.length - 1) {
            question_cards.push(generate_new_question());
        }
        current_index++;
        current_question = question_cards[current_index];
    }

    function handle_previous_button() {
        current_index = Math.max(current_index - 1, 0);
        current_question = question_cards[current_index];
    }

    function DEBUG() {
        console.debug(`Question cards: ${question_cards.map((v) => v.card.fr)}`);
        console.debug(`Current index: ${current_index}`);
        let c = question_cards[current_index];
        console.debug(`Current card: (${c.card.fr}, ${c.question.question_type})`);
        console.debug(`Questions length: ${question_cards.length}`);
        console.debug('----------------------------------------------------');
    }
</script>

<h1>Study (Étudier)</h1>
<Navigator />
<main>
    <button onclick={DEBUG}>DEBUG</button>
    <QuestionComponent
        question={current_question.question}
        card={current_question.card}
        {flash_cards}
    />
    <div class="buttons-container">
        <button type="button" onclick={handle_previous_button}>Previous</button>
        <span>{current_index + 1}/{question_cards.length}</span>
        <button type="button" onclick={handle_next_button}>Next</button>
    </div>
</main>

<style>
    h1 {
        margin-bottom: 5vh;
    }

    .buttons-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .buttons-container > button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 30%;
        height: 5vh;
        font-size: large;
    }
</style>
