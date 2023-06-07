import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameId = nanoid();
    const telId = nanoid();

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={nameId} className={css.label}>
          Name
                <input
                    placeholder='Enter name'
            className={css.input}
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={telId} className={css.label}>
          Phone
                <input
                    placeholder='Enter phone number'
            className={css.input}
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
Phonebook.propTypes = {
  addContact: PropTypes.func.isRequired,
};
