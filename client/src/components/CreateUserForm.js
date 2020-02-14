import React, { useState } from "react";
import sendUserData from "../helpers/sendUserData";
const CreateUserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUsernameChange = e => setUsername(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await sendUserData("/api/createuser", {
      username,
      password
    });
    if (response.status !== 201) {
      const responseJson = await response.json();
      setError(responseJson.error);
    } else {
      console.log("creating user successful");
    }
  };

  return (
    <form class="form create-form" autocomplete="off" onSubmit={handleSubmit}>
      <label for="new-username">Create a new username</label>
      <br />
      <input
        type="text"
        name="username"
        id="new-username"
        placeholder="username"
        required
        pattern="[A-za-z0-9]+"
        value={username}
        onChange={handleUsernameChange}
      ></input>
      <p id="new-username-err">{error}</p>
      <input
        type="password"
        name="password"
        id="new-password"
        placeholder="password"
        aria-label="create a password"
        minlength="6"
        pattern="[A-za-z0-9]+"
        required
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <p id="new-password-err">{error}</p>
      <input type="submit" value="GO"></input>
    </form>
  );
};
export default CreateUserForm;
