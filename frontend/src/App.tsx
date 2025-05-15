import React, { useEffect, useState } from 'react';

function App() {
  const [answer, setAnswer] = useState<string>('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://16.171.0.82:3000/api/data'); // Replace with actual backend URL
        const json = await response.json();
        setAnswer(json.data); // Assumes the backend responds with { data: "..." }
      } catch (error) {
        console.error('Error fetching data:', error);
        setAnswer('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest Answer</h1>
      <span id="answer">{answer}</span>
    </div>
  );
}

export default App;
