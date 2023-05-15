<script>
	import Modal from "./components/Modal.svelte";

	let name = "";
	let showModal = false;

	const toggleModal = () => {
		showModal =!showModal;
	}

	function validName(e) {
		if (e.target.value === 'Den') { showModal = true }
	}
</script>

<Modal {showModal} on:click={toggleModal}>
  <h2>Nice!!! {name}</h2>
	<p>This is a modal</p>
	<button on:click={toggleModal}>Close</button>
</Modal>
<main>
	<h1>Hello {name || "Mystery"}!</h1>
	<input type="text" bind:value={name} on:input={(e) => validName(e)}>
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

	h2 {
		color: black;
		font-size: 2em;
		font-weight: bold;
	}
</style>