import { combineReducers } from 'redux';
import actionTypes from './contactsActionTypes';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      if (
        state &&
        state.find(contact => payload.contact.name === contact.name)
      ) {
        alert('User with this name is already exist');
        return state;
      } else {
        return [...state, payload.contact];
      }

    case actionTypes.REMOVE:
      return state.filter(contact => contact.id !== payload.id);
    default:
      return state;
  }
};
// if (contacts && contacts.find(contact => name === contact.name)) {
//       this.showAlert(`${contact.name} already exists`);
//     } else {
//       this.setState(prevState => {
//         return {
//           contacts: [...prevState.contacts, contact],
//         };
//       });
//     }

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
