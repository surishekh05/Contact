const ContactItem = ({ contact, onDelete }) => {
  return (
    <tr className="border-b">
      <td className="p-2">{contact.name}</td>
      <td className="p-2">{contact.email || "-"}</td>
      <td className="p-2">{contact.phone}</td>
      <td className="p-2">{contact.message || "-"}</td>
      <td className="p-2">
        <button
          onClick={() => onDelete(contact._id)}
          className="text-red-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
