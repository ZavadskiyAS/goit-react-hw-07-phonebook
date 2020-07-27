import actionTypes from './themeActionTypes';

const themeReducer = (state = 'light', { type }) => {
  switch (type) {
    case actionTypes.CHANGE_THEME:
      if (state && state === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    default:
      return state;
  }
};

export default themeReducer;
