import { v4 as uuid } from 'uuid';
import contactsActionTypes from './contactsActionTypes';

const addContact = (name, number) => ({
  type: contactsActionTypes.ADD,
  payload: {
    contact: { id: uuid(), name: name, number: number },
  },
});

const removeContact = contactId => ({
  type: contactsActionTypes.REMOVE,
  payload: {
    id: contactId,
  },
});

const changeFilter = filter => ({
  type: contactsActionTypes.CHANGE_FILTER,
  payload: {
    filter,
  },
});

const showAlert = message => ({
  type: contactsActionTypes.ALERT_SHOW,
  payload: {
    message,
  },
});

export default { addContact, removeContact, changeFilter, showAlert };
