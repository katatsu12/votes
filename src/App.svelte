<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreateVoteForm from "./components/CreateVoteForm.svelte";

	let items = ['Current Vote', 'All Votes'];
	let activeItem = 'All Votes'

	const tabSwitch = (e) => {
		activeItem = e.detail;
	}
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabSwitch={tabSwitch} />
	{#if activeItem == 'Current Vote'}
		<p>Current Vote</p>
	{:else if activeItem == 'All Votes'}
		<CreateVoteForm />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 70vw;
		margin: 40px auto;
		display: flex;
		justify-content: center;
		text-align: center;
		flex-direction: column;
	}
</style>