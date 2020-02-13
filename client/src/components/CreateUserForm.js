import React from "react";
const CreateUserForm = () => {
  return (
    <form
      class="form create-form"
      autocomplete="off"
      action="/api/createuser"
      method="post"
    >
      <label for="new-username">Create a new username</label>
      <br />
      <input
        type="text"
        name="username"
        id="new-username"
        placeholder="username"
        required
        pattern="[A-za-z0-9]+"
      ></input>
      <p id="new-username-err"></p>
      <input
        type="password"
        name="password"
        id="new-password"
        placeholder="password"
        aria-label="create a password"
        minlength="6"
        pattern="[A-za-z0-9]+"
        required
      ></input>
      <p id="new-password-err"></p>
      <input type="submit" value="GO"></input>
    </form>
  );
};
export default CreateUserForm;
