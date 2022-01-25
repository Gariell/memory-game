import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Memory game',
		cardLimit: [12, 18, 24, 30] 
	}
});

export default app;