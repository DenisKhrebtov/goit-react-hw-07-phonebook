import PropTypes from "prop-types";
import { deleteContact } from "redux/contactsSlice";
import { useDispatch } from "react-redux";

import { ContactNeme, DeleteButton, Item } from "./ContactItem.styled";

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <ContactNeme>
        {name}: {number}
      </ContactNeme>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
