import ActionTypes from './themeActionTypes';

const changeTheme = theme => ({
  type: ActionTypes.CHANGE_THEME,
  payload: {
    theme,
  },
});

export default { changeTheme };
