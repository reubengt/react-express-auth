import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import CreateUserForm from "./components/createUserForm";
function App() {
  return (
    <div className="App">
      <LoginForm />
      <CreateUserForm />
    </div>
  );
}

export default App;
