import React, { useState } from "react";
import api from "./api";

function CreateOwner() {
  const [form, setForm] = useState({
    name: "",
    flatNumber: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await api.post("/owners", form);
      alert("Owner Created Successfully");
      setForm({ name: "", flatNumber: "", phone: "", email: "" });
    } catch (err) {
      console.log(err);
      alert("Error creating owner");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Owner</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <br />

      <input
        name="flatNumber"
        placeholder="Flat Number"
        value={form.flatNumber}
        onChange={handleChange}
      />
      <br />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <br />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <br />

      <button onClick={submit}>Add Owner</button>
    </div>
  );
}

export default CreateOwner;