<script>
  let fields = {}

  function onSubmit(e) {
    const formData = new FormData(e.target);
    const data = {};

    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    fields = data;
  }

  function addOption() {
    let fields = this.form.getElementsByClassName('form-field')
    let lastField = fields[fields.length - 1].cloneNode(true);
    let label = lastField.firstChild
    let input = lastField.lastChild
    let id = parseInt(input.dataset.id) + 1
    
    label.innerText = `Option ${id}:`
    label.setAttribute("for", `option-${id}`)
    input.dataset.id = id
    input.setAttribute("name", `option-${id}`)
    input.setAttribute("id", `option-${id}`)

    document.getElementById('options-group').innerHTML += `<div class='form-field'>${lastField.innerHTML}</div>`
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="form-group">
    <div class="form-field">
      <label for="question">Vote Question:</label>
      <input type="text" id="question" name="question" />
    </div>
    <div id="options-group">
      <div class="form-field">
        <label for="option-1">Option 1:</label>
        <input type="text" id="option-1" name="option-1" data-id="1" />
      </div>
    </div>
    <div class="actions">
      <button type="button" on:click={addOption}>Add option</button>
      <button type="submit">Submit</button>
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
</style>