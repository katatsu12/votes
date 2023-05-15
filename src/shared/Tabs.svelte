<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabSwitch', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: flex;
    justify-content: canter;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 16px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .tabs {
    margin-bottom: 40px;
  }

  .active { 
    color: red;
    border-bottom: 2px solid red;
    padding-bottom: 8px;
  }
</style>