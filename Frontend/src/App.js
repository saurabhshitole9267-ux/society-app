import React, { useState, useEffect } from "react";
import Login from "./Login";
import Owners from "./Owners";
import CreateOwner from "./CreateOwner";

function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState(null);

  // Check token on load
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setPage("owners");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setPage("login");
  };

  return (
    <div>
      {token && (
        <>
          <button onClick={() => setPage("owners")}>Owners</button>
          <button onClick={() => setPage("create")}>Create Owner</button>
          <button onClick={logout}>Logout</button>
        </>
      )}

      {!token && <Login />}

      {token && page === "owners" && <Owners />}
      {token && page === "create" && <CreateOwner />}
    </div>
  );
}

export default App;