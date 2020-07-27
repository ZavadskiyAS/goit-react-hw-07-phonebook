import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from './ContactList.module.css';
import ContactItem from '../contactItem/ContactItem';
import PropTypes from 'prop-types';

const itemMove = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul">
      {contacts &&
        contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={250} classNames={itemMove}>
            <ContactItem
              contact={contact}
              onRemoveContact={() => onRemoveContact(contact.id)}
            />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(contacts.filter.toLowerCase()),
  ),
});

const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
