import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts.json';

class App extends Component {
  state = {
    contacts: Contacts,
    filter: '',
  };

  handleFormSubmit = name => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
    };
    this.setState({
      contacts: [...contacts, newContact],
    });
    let existContact = this.state.contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { name, contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm name={name} onFormSubmit={this.handleFormSubmit} />
        <Filter filteredContacts={this.handleFilterChange} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
