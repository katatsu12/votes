<script>
  export let classType = "primary";
</script>

<button class={classType} on:click>
  <slot></slot>
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    background-color: white;
  }
</style>