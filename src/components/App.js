import React from 'react';
import { connect } from 'react-redux';
import themeActions from '../redux/theme/themeActions';
import themeConfig from '../service/themeConfig';
import styles from './App.module.css';
import Logo from './logo/Logo';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const App = ({ contacts, theme, toggleTheme }) => {
  return (
    <div
      style={{
        color: themeConfig[theme].fontColor,
        background: themeConfig[theme].bodybg,
      }}
    >
      <Logo />
      <button onClick={toggleTheme}>Change theme</button>
      <ContactForm />
      {contacts && contacts.length > 1 && <Filter />}
      <h2 className={styles.sectionTitle}>Contacts</h2>
      <ContactList />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  toggleTheme: themeActions.changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
