import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsOperations';
import { useDispatch } from 'react-redux';

import {
  ContactName,
  ContactNumber,
  DeleteButton,
  Item,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <ContactName>
        {name}: <ContactNumber>{phone}</ContactNumber>
      </ContactName>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
