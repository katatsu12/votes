<script>
  export let vote;
  let progressValue = "0%";

  const progressPercent = (option) => {
    let points = vote.options.map(option => option.points)
    let sum = points.reduce((acc, current) => acc + current, 0);
    return option.points / sum;
  };

  const pointsManage = (action) => {
    if (action === "increase") {
      console.log('asd')
    } else if (action === "decrease") {
      console.log('asd2')
    }
  };
</script>

<div class="vote">
  <h3>{vote.question}</h3>
  <div class="options">
    {#each vote.options as option}
      <p>{option.title}</p>
      <div class="option">
        <button on:click={() => pointsManage("decrease")}>-</button>
        <div class="progress">
          <p>{option.points}</p>
          <div class="bar" style="width: {progressPercent(option)}" on:load={progressPercent(option)} />
        </div>
        <button on:click={() => pointsManage("increase")}>+</button>
      </div>
    {/each}
  </div>
</div>

<style>
  .vote {
    background-color: white;
    border-radius: 10px;
    color: black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .options {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin: 1em auto;
  }

  .option {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .progress {
    background-color: grey;
    width: 100%;
    position: relative;
  }

  .bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: red;
  }
</style>
