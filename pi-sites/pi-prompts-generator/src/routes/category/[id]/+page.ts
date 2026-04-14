import { categories } from '$lib/data';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const category = categories.find((c) => c.id === params.id);
	if (!category) throw error(404, 'Category not found');
	return { category };
};
