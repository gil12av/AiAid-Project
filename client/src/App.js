import React, { useState } from 'react';
import './App.css';

function App() {
  const [textareaContent, setTextareaContent] = useState('');
  const [response, setResponse] = useState('');

  const handleSendRequest = async () => {
    try {
      const response = await fetch('http://localhost:1234/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: textareaContent,
          additionalInstructions: 'Put any additional instructions here'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
      // Handle error as needed
    }
  };

  return (
    <div className="App">
      <h1>OpenAI Text Analysis</h1>
      Response: {response}
      <textarea
        rows="10"
        cols="50"
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}
      />
      <br />
      <button onClick={handleSendRequest}>Analyze Text</button>
      <br />
      {response && (
        <div>
          <h2>Analysis Result:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
