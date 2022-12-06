import { ContactItem } from 'components/ContactItem/ContactItem';

import { List } from 'components/ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} name={name} phone={phone} id={id} />
      ))}
    </List>
  );
};
