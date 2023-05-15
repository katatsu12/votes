<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";

	let items = ['Current Vote', 'All Votes'];
	let activeItem = 'Current Vote'

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
		<p>All Votes</p>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 70vw;
		margin: 40px auto;
	}
</style>