<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import VoteList from "./components/VoteList.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreateVoteForm from "./components/CreateVoteForm.svelte";

	let items = ['Current Vote', 'All Votes'];
	let activeItem = 'Current Vote';

	const tabSwitch = (e) => {
		activeItem = e.detail;
	}

	let votes = [
		{
			id: 1,
      question: 'Vote 1',
      options: [
				{ id: 1, title: 'Vote 1 description', points: 0 }, 
				{ id: 2, title: 'Vote 2 desc', points: 10 }, 
				{ id: 3, title: 'Vote 3 desc', points: 20 }
			]
		}
	]

	const handleSubmit = (e) => {
		let vote = e.detail
		votes = [vote, ...votes]
		activeItem = 'Current Vote'
		console.log(votes)
	}
</script>

<Header />
<Tabs {items} {activeItem} on:tabSwitch={tabSwitch} />
<main>
	{#if activeItem == 'Current Vote'}
		<VoteList {votes} />
	{:else if activeItem == 'All Votes'}
		<CreateVoteForm on:add={handleSubmit} />
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
		min-height: calc(100vh - 310px);
	}
</style>