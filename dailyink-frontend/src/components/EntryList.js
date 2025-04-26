// src/components/EntryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EntryList.css';

function EntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/daily');
        setEntries(res.data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div>
      <h2 className="entry-title"> Previous Entries</h2>
      {entries.length > 0 ? (
        entries.map((entry) => (
          <div key={entry._id} className="entry">
            <blockquote>"{entry.quote}"</blockquote>
            <p>{entry.reflection}</p>
            <small>{new Date(entry.date).toLocaleDateString()}</small>
          </div>
        ))
      ) : (
        <p className="no-entries">No entries yet... Start your journey!</p>
      )}
    </div>
  );
}

export default EntryList;
