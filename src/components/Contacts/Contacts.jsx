import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export class Contacts extends Component {
  onDeleteContact = name => this.props.deleteContact(name);
  render() {
    const { contacts } = this.props;
    return (
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.name}>
            {contact.name}: {contact.number}
            <button
              className={css.deleteBtn}
              onClick={() => this.onDeleteContact(contact.name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
