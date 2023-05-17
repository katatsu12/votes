<script>
  export let votes = []
</script>

<div class="vote-list">
  {#each votes as vote (vote.id)}
    <div>{vote.question}</div>
  {/each}
</div>

<style>
  .vote-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
