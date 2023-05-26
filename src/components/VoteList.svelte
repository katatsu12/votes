<script>
  import VoteDetails from "./VoteDetails.svelte";

  export let votes = [];
</script>

<div class="vote-list">
  {#each votes as vote (vote.id)}
    <VoteDetails {vote} on:vote />
  {/each}
</div>

<style>
  .vote-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
