import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { getContacts, deleteContact } from "./services/api";
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]); // MUST be array
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    const data = await getContacts({ page, search, sort });

    // 🔥 FIX HERE
    setContacts(data.contacts || []);
    setTotalPages(data.totalPages || 1);
  };

  useEffect(() => {
    fetchData();
  }, [page, search, sort]);

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">

        <ContactForm onAdd={fetchData} />

        {/* Search + Sort */}
        <div className="flex gap-4">
          <input
            className="border p-2 w-full"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />

          <select
            className="border p-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        <ContactList contacts={contacts} onDelete={handleDelete} />

        {/* Pagination */}
        <div className="flex justify-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            Prev
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;
