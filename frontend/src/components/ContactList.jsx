import ContactItem from "./ContactItem";

const ContactList = ({ contacts = [], onDelete }) => {
  if (contacts.length === 0) {
    return <p className="text-center">No contacts found</p>;
  }

  return (
    <table className="w-full mt-6 bg-white shadow rounded">
      <tbody>
        {contacts.map(contact => (
          <ContactItem
            key={contact._id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};


export default ContactList;
