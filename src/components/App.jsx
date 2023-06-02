import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

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

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <ContactForm
          name={name}
          onFormSubmit={this.handleFormSubmit}
        />
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
