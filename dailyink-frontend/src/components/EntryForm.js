import React, { useState } from 'react';
import axios from 'axios';

function EntryForm() {
  const [quote, setQuote] = useState('');
  const [reflection, setReflection] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/daily', { quote, reflection });
      setQuote('');
      setReflection('');
    } catch (err) {
      console.error('Failed to submit entry:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Quote"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        required
      />
      <textarea
        placeholder="Reflection"
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        required
      />
      <button type="submit">Save Entry</button>
    </form>
  );
}

export default EntryForm;
