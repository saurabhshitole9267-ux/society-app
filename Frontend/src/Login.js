import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import api from "./api";   // ✅ important

function Login() {
  const [username, setUsername] = useState("");   // ✅ defined
  const [password, setPassword] = useState("");   // ✅ defined
  const navigate = useNavigate();

  const login = async () => {
  try {
    const res = await api.post("/auth/login", {
      username,
      password
    });

    localStorage.setItem("token", res.data.token);

    alert("Login Success");

    navigate("/owners"); // ✅ redirect

  } catch (err) {
    alert("Login Failed");
  }

};

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;