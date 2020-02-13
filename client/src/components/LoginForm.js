import React from "react";
const LoginForm = () => {
  return (
    <form
      class="form login-form"
      autocomplete="off"
      action="/login"
      method="post"
    >
      <label for="login-username">
        Welcome Back, Enter your username to continue!
      </label>
      <br />
      <input
        type="text"
        name="username"
        id="login-username"
        placeholder="username"
        required
        pattern="[a-z0-9]+"
      ></input>
      <p id="login-username-err"></p>
      <input
        type="password"
        name="password"
        id="login-password"
        placeholder="password"
        aria-label="enter login password"
        minlength="6"
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
        required
      ></input>
      <p id="login-password-err"></p>
      <input type="submit" value="GO"></input>
    </form>
  );
};
export default LoginForm;
