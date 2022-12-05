import PropTypes from "prop-types";

import { ContactItem } from "components/ContactItem/ContactItem";

import { List } from "components/ContactList/ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normilizedFilter = filterValue.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  return (
    <List>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
