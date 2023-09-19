import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			// see the 'Deployment configuration' section below
		})
	}
};
