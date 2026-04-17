import React, { useEffect, useState } from "react";
import api from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Owners() {
const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

  const [owners, setOwners] = useState([]);

  const [name, setName] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const [showModal, setShowModal] = useState(false);

  // ✅ FETCH OWNERS
  const fetchOwners = async () => {
    try {
      const res = await api.get("/owners");
      setOwners(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load owners");
    }
  };

  // ✅ DELETE OWNER (with confirmation)
  const deleteOwner = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/owners/${id}`);
      toast.success("Owner deleted");
      fetchOwners();
    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  // ✅ EDIT OWNER (open modal)
  const editOwner = (owner) => {
    setEditId(owner.ownerId);
    setName(owner.name);
    setFlatNumber(owner.flatNumber);
    setPhone(owner.phone);
    setEmail(owner.email);
    setShowModal(true);
  };

  // ✅ UPDATE OWNER
  const updateOwner = async () => {
    try {
      await api.put(`/owners/${editId}`, {
        ownerId: editId,
        name,
        flatNumber,
        phone,
        email,
      });

      toast.success("Owner updated successfully");

      setShowModal(false);
      fetchOwners();
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    }
  };

  useEffect(() => {
    fetchOwners();
  }, []);

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h2>Owners Management</h2>

      {/* ✅ TOAST CONTAINER */}
      <ToastContainer />

      {/* ✅ TABLE */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#333", color: "white" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Flat</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {owners.map((o) => (
            <tr key={o.ownerId} style={{ textAlign: "center" }}>
              <td>{o.ownerId}</td>
              <td>{o.name}</td>
              <td>{o.flatNumber}</td>
              <td>{o.phone}</td>
              <td>{o.email}</td>

              <td>
                <button
                  onClick={() => editOwner(o)}
                  style={{
                    background: "orange",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    marginRight: 5,
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteOwner(o.ownerId)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: 20,
              borderRadius: 10,
              width: 300,
            }}
          >
            <h3>Edit Owner</h3>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              style={{ width: "100%", marginBottom: 10, padding: 6 }}
            />

            <input
              value={flatNumber}
              onChange={(e) => setFlatNumber(e.target.value)}
              placeholder="Flat"
              style={{ width: "100%", marginBottom: 10, padding: 6 }}
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              style={{ width: "100%", marginBottom: 10, padding: 6 }}
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{ width: "100%", marginBottom: 10, padding: 6 }}
            />

            <button
              onClick={updateOwner}
              disabled={!name || !flatNumber || !phone || !email}
              style={{
                background:
                  !name || !flatNumber || !phone || !email
                    ? "gray"
                    : "green",
                color: "white",
                border: "none",
                padding: 8,
                marginRight: 10,
                cursor: "pointer",
              }}
            >
              Update
            </button>
            <button onClick={logout}>Logout</button>
            
            <button
              onClick={() => setShowModal(false)}
              style={{
                background: "gray",
                color: "white",
                border: "none",
                padding: 8,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Owners;