import type { Meal } from "$lib/chef-suggest/types";
import type { PageLoad } from "../chef-suggest/$types";
import Papa from "papaparse"

export const load: PageLoad = async ({ fetch }) => {
    const CHEF_SUGGEST_MEALS_URL =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5Njea8v0uttwP3xvlWPF7iK_bO8DX7jxBzMu_A37WBYZWlASY32W99rbVCsSeZyl-_b1-ugR8iqmc/pub?gid=0&single=true&output=tsv';
    let error: Error
    try {
        const response = await fetch(CHEF_SUGGEST_MEALS_URL);
        if (!response.ok)
            throw new Error(`Response Status: ${response.status}`);
        const content = await response.text();
        let { data, errors, meta } = Papa.parse(content, {
            header: true,
            delimiter: '\t'
        })
        let meals = data.map((v: object) => ({ ...v, isLocked: false }))
        return {
            meals,
        }
    } catch (e) {
        throw new Error(`Error: ${e}`)
    }
}
