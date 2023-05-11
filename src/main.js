import App from './App.svelte';
import Loop from './Loop.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'World'
	}
});

export default app;