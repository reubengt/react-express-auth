import React from "react";
const LoginForm = () => {
  return (
    <form
      class="form create-form"
      autocomplete="off"
      action="/newuser"
      method="post"
    >
      <label for="new-username">Create a new username, young warrior!</label>
      <br />
      <input
        type="text"
        name="username"
        id="new-username"
        placeholder="username"
        required
        pattern="[a-z0-9]+"
      ></input>
      <p id="new-username-err"></p>
      <input
        type="password"
        name="password"
        id="new-password"
        placeholder="password"
        aria-label="create a password"
        minlength="6"
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
        required
      ></input>
      <p id="new-password-err"></p>
      <input type="submit" value="GO"></input>
    </form>
  );
};
export default LoginForm;
