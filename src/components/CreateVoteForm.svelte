<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let fields = {};
  let dispatch = createEventDispatcher();

  function onSubmit(e) {
    let formData = new FormData(e.target);
    let data = {};
    let options = {};

    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    for (const [key, value] of Object.entries(data)) {
      if (key.includes('option')) {
        options['id'] = key.match(/-(\d+)/)[1];
        options['title'] = value;
        options['points'] = 0;
      }
    }

    fields = { id: Math.random(), question: data['question'], options: [options] };
    dispatch("add", fields);
  }

  function addOption(e) {
    e.preventDefault();

    let fields = e.target.form.getElementsByClassName("form-field");
    let lastField = fields[fields.length - 1].cloneNode(true);
    let label = lastField.firstChild;
    let input = lastField.lastChild;
    // TODO: refactor this id value
    let id = parseInt(input.dataset.id) + 1;

    label.innerText = `Option ${id}:`;
    label.setAttribute("for", `option-${id}`);
    input.dataset.id = id;
    input.setAttribute("name", `option-${id}`);
    input.setAttribute("id", `option-${id}`);

    document.getElementById(
      "options-group"
    ).innerHTML += `<div class='form-field'>${lastField.innerHTML}</div>`;
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="form-group">
    <div class="form-field">
      <label for="question">Vote Question:</label>
      <input type="text" id="question" name="question" required />
    </div>
    <div id="options-group">
      <div class="form-field">
        <label for="option-1">Option 1:</label>
        <input type="text" id="option-1" name="option-1" data-id="1" />
      </div>
    </div>
    <div class="actions">
      <Button on:click={(e) => addOption(e)}>Add Option</Button>
      <Button>Add Vote</Button>
    </div>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }

  label {
    margin: 10px auto;
    text-align: left;
    font-weight: bold;
  }

  .form-group {
    width: 60%;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
  }
</style>
