import { categories } from '$lib/data';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const category = categories.find((c) => c.id === params.id);
	if (!category) throw error(404, 'Category not found');
	const prompt = category.prompts.find((p) => p.id === params.promptId);
	if (!prompt) throw error(404, 'Prompt not found');
	return { category, prompt };
};
