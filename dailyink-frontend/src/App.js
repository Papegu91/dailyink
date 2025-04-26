// src/App.js
import React from 'react';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <EntryForm />
        <EntryList />
      </div>
    </div>
  );
}

export default App;
