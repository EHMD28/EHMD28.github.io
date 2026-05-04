// @ts-nocheck
import type { PageLoad } from './$types';

export const load = async ({ parent }: Parameters<PageLoad>[0]) => {
	// Just returns the data which was loaded from minerva/layout.ts
	return await parent();
};
