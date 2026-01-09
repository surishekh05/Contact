import { useState } from "react";
import { createContact } from "../services/api";

const ContactForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Phone must be 10 digits";
    if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const saved = await createContact(form);
    onAdd(saved);

    setForm({ name: "", email: "", phone: "", message: "" });
    setSuccess("Contact submitted successfully!");
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4 w-full">
      <h2 className="text-xl font-semibold">Add Contact</h2>

      {success && <p className="text-green-600">{success}</p>}

      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        className="border p-2 w-full"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}

      <textarea
        className="border p-2 w-full"
        placeholder="Message (optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        className="bg-purple-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        disabled={!form.name || !form.phone}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
