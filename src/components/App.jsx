import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    if (name.trim() === '') {
      return;
    }
    const contact = {
      id: nanoid(),
      name: name,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm name={name} onFormSubmit={this.handleFormSubmit} />

        <h2>Contacts</h2>
        <ContactsList contacts={contacts} onDelete={this.deleteContact} />
      </>
    );
  }
}

export default App;
