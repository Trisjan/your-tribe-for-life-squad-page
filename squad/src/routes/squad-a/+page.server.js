import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load() {
	const client = createClient();

	const squada = await client.getByUID('squada', 'squad-a');
	console.log(squada);

	return {
		squada,
		title: asText(squada.data.title),
		meta_description: squada.data.meta_description,
		meta_title: squada.data.meta_title,
		meta_image: squada.data.meta_image.url,

		// name: squada.data.slices.primary.name,
	};
}
