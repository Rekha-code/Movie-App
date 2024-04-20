import { useState } from "react";

import "./App.css";

import "./Components/style.css";
import UserLogin from "./Components/UserLogin";

function App() {
  // let username = "Rekha";
  // let password = "12345";
  // let loginstatus;
  // if (username === "Rekha" && password === "12345") {
  //   loginstatus = true;
  // } else {
  //   loginstatus = false;
  // }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username and password match
    if (username === "Rekha" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert("Incorrect username or password. Please try again.");
    }
  };

  if (isLoggedIn) {
    return <UserLogin isLoggedIn={setIsLoggedIn}></UserLogin>;
  } else {
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default App;
