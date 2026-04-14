import { colorSchemas } from '$lib/schemas';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const schema = colorSchemas.find((s) => s.id === params.schemaId);
	if (!schema) throw error(404, 'Schema not found');
	return { schema };
};
