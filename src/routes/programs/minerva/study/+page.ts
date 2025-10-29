import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	// Just returns the data which was loaded from minerva/layout.ts
	return await parent();
};
