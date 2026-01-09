const BASE_URL = "http://localhost:5000/api/contacts";

export const getContacts = async ({ page = 1, search = "", sort = "latest" } = {}) => {
  const params = new URLSearchParams({
    page,
    limit: 5,
    search,
    sort
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  return res.json();
};

export const createContact = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteContact = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};
