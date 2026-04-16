import React, { useState } from "react";
import api from "./api";   // ✅ important

function Login() {
  const [username, setUsername] = useState("");   // ✅ defined
  const [password, setPassword] = useState("");   // ✅ defined

  const login = async () => {
  try {
    const res = await api.post(
      `/Auth/login?username=${username}&password=${password}`
    );

    console.log("RESPONSE:", res.data);

    const token = res.data.token || res.data;

    console.log("TOKEN:", token); // 👈 IMPORTANT

    localStorage.setItem("token", token);

    alert("Login Success");
    window.location.reload();

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
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