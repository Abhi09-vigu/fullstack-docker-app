import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching from backend:', err);
        setError('Failed to fetch data from backend');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>🐳 Full-Stack Docker App</h1>
        <div className="info-box">
          <h2>React + Express + PostgreSQL</h2>
          <p className="description">
            Frontend fetching data from Backend API connected to Database
          </p>
        </div>
        
        <div className={`response-box ${loading ? 'loading' : ''} ${error ? 'error' : 'success'}`}>
          <h3>API Response:</h3>
          {loading && <p className="loading-text">⏳ Loading...</p>}
          {error && <p className="error-text">❌ {error}</p>}
          {message && !loading && !error && (
            <p className="message-text">✅ {message}</p>
          )}
        </div>

        <div className="status">
          <div className="status-item">
            <span className="status-label">Frontend</span>
            <span className="status-indicator running">● Running</span>
          </div>
          <div className="status-item">
            <span className="status-label">Backend</span>
            <span className={`status-indicator ${message ? 'running' : 'loading'}`}>
              {message ? '● Running' : '⏳ Connecting'}
            </span>
          </div>
          <div className="status-item">
            <span className="status-label">Database</span>
            <span className={`status-indicator ${message ? 'running' : 'loading'}`}>
              {message ? '● Connected' : '⏳ Connecting'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
