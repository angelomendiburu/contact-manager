import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import contacts from './data/contacts.json';
import './App.css';

function App() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <ContactList contacts={contacts} onSelectContact={setSelectedContact} />
        <ContactDetail contact={selectedContact} />
      </div>
    </div>
  );
}

export default App;