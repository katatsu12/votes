<script>
  export let vote;
  let percentageProgress = {}
  let modifyBy = 5;

  const progressPercentages = () => {
    let points = vote.options.map(option => option.points)
    let newValue = {}
    vote.options.forEach(option => {
      let sum = points.reduce((acc, current) => acc + current, 0);

      option['progress'] = (option.points / sum) * 100
      newValue[option.id] = option.progress
    });
    percentageProgress = newValue
  };
  progressPercentages();

  const pointsManage = (e, action) => {
    let progressElement = e.target.parentElement.querySelector('.progress')
    let optionId = e.target.parentElement.dataset['optionId']

    if (action === "increase") {
      let option = vote.options.find(option => option.id == optionId);
      option.points = option.points + modifyBy;
      progressPercentages();
    } else if (action === "decrease") {
      let option = vote.options.find(option => option.id == optionId);
      option.points = option.points - modifyBy;
      progressPercentages();
    }
  };
</script>

<div class="vote">
  <h3>{vote.question}</h3>
  <div class="options">
    {#each vote.options as option}
      <p>{option.title}</p>
      <div class="option" data-option-id={option.id}>
        <button on:click={(e) => pointsManage(e, "decrease")}>-</button>
        <div class="progress">
          <p>{option.points}</p>
          <div class="bar" style="width: {`${percentageProgress[option.id]}%`}" />
        </div>
        <button on:click={(e) => pointsManage(e, "increase")}>+</button>
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
