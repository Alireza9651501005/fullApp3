import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();

  const postUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5500/users", {
        korsName: username,
        age: password,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      <header>
        <h1>Please Enter your cv in here</h1>
        <form method="POST" onSubmit={postUser}>
          <div>
            <input
              type="text"
              placeholder="enter your name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="enter your fname"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
