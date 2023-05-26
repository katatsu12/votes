<script>
  import { createEventDispatcher } from "svelte";

  export let vote;
  let points = vote.options.map((option) => option.points);
  let percentageProgress = {};

  const dispatch = createEventDispatcher();

  $: totalVotes = vote.options.map((option) => option.points).reduce((acc, current) => acc + current, 0);

  const progressPercentages = () => {
    let newValue = {};
    vote.options.forEach((option) => {
      let sum = points.reduce((acc, current) => acc + current, 0);

      option["progress"] = (option.points / sum) * 100;
      newValue[option.id] = option.progress;
    });
    percentageProgress = newValue;
  };
  progressPercentages();

  const pointsManage = (e, action) => {
    let optionId = e.target.parentElement.dataset["optionId"];
    let option = vote.options.find((option) => option.id == optionId);

    if (action === "increase") {
      dispatch("vote", { vote, option, action: "increase" });
      progressPercentages();
    } else if (action === "decrease") {
      dispatch("vote", { vote, option, action: "decrease" });
      progressPercentages();
    }
  };
</script>

<div class="vote">
  <span>Total Votes: {totalVotes}</span>
  <h3>{vote.question}</h3>
  <div class="options">
    {#each vote.options as option}
      <p>{option.title}</p>
      <div class="option" data-option-id={option.id}>
        <button on:click={(e) => pointsManage(e, "decrease")}>-</button>
        <div class="progress">
          <p>{option.points}</p>
          <div
            class="bar"
            style="width: {`${percentageProgress[option.id]}%`}"
          />
        </div>
        <button on:click={(e) => pointsManage(e, "increase")}>+</button>
      </div>
    {/each}
  </div>
</div>

<style>
  p {
    position: relative;
    z-index: 10;
  }

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
    width: 60%;
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
