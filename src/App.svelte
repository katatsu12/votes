<script>
	import Modal from "./components/Modal.svelte";

	export let name = 'Den';
</script>

<Modal />
<main>
	<h1>Hello {name}!</h1>
	<input type="text" bind:value={name} >
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #5d9497;
		font-size: 4em;
		font-weight: bold;
	}
</style>