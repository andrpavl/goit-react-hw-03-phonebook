import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  addContact = (name, number) => {
    const isInContacts = this.state.contacts.some(
      contact => contact.name === name
    );
    if (isInContacts) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        name: name,
        number: number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const conts = localStorage.getItem('contacts');
    const parsedConts = JSON.parse(conts);
    if (parsedConts) {
      this.setState({ contacts: parsedConts });
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={css.application}>
        <h1>Phonebook</h1>
        <Phonebook addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} handleChange={this.handleChange} />
        <Contacts
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
