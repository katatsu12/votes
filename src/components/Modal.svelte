<script>
	export let showModal = false;	
</script>

{#if showModal}
	<div class="backdrop" on:click|self>
		<div class="modal">
      <slot />
		</div>
	</div>
{/if}

<style>
	.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
  }

	.modal p {
    color: #000;
    font-size: 16px;
    text-align: center;
  }
</style>