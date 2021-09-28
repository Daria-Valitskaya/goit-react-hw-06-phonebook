// import React, { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Section from "./Components/Section/Section";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("contacts") ?? []);
  // });
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const onAddContact = (name, number) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };
  //   if (contacts.find((contact) => contact.name === name)) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     return setContacts((prevState) => [contact, ...prevState]);
  //   }
  // };

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2>My Contacts </h2>
        <Filter />
      </Section>
      <Section>
        <ContactList />
      </Section>
    </div>
  );
}
