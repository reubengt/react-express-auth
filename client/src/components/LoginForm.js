import React, { useState } from "react";
import sendUserData from "../helpers/sendUserData";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUsernameChange = e => setUsername(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await sendUserData("/api/login", {
      username,
      password
    });
    if (response.status !== 200) {
      const responseJson = await response.json();
      setError(responseJson.error);
    } else {
      console.log("login successful");
    }
  };
  return (
    <form class="form login-form" autocomplete="off" onSubmit={handleSubmit}>
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
        pattern="[A-za-z0-9]+"
        value={username}
        onChange={handleUsernameChange}
      ></input>
      <input
        type="password"
        name="password"
        id="login-password"
        placeholder="password"
        aria-label="enter login password"
        minlength="6"
        pattern="[A-za-z0-9]+"
        required
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <p id="login-err">{error}</p>
      <input type="submit" value="GO"></input>
    </form>
  );
};
export default LoginForm;
