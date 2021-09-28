import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { onDeleteContact } from "../../redux/Contacts/contacts-actions";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, number, name }) => (
      <li key={id} name={name}>
        <ContactItem
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
const filteredVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleContacts = filteredVisibleContacts(items, filter);
  return { contacts: visibleContacts };
};
const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(onDeleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
