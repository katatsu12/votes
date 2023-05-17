<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<div class="tabs">
  {#each items as item}
    <button on:click={() => dispatch('tabSwitch', item)}>
      <div class:active={item === activeItem}>{item}</div>
    </button>
  {/each}
</div>

<style>
  .tabs {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  .active { 
    border-bottom: 2px solid;
  }

  button {
    margin: 0 16px;
    font-size: 18px;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  
  button:active {
    background-color: unset;
  }
</style>