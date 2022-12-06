import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';

import { Wrapper, Title } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
