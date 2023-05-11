<script>
	export let name = 'Den';
	let people = [{ name: 'John', age: 21 }, { name: 'Bob', age: 21 }, { name: 'Jame', age: 30 }];
</script>

<main>
	<h1>Hello {name}!</h1>
	<input type="text" bind:value={name} >

	<ul>
		{#each people as person}
			<li>{person.name}: {person.age}</li>
		{/each}
    </ul>
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