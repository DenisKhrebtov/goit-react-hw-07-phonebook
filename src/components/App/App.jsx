import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "../Filter/Filter";

import { Wrapper, Title } from "./App.styled";

export function App() {
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
