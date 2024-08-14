import React from 'react';
import ReactDOM from 'react-dom/client';

// Import existing stylesheets
// import './index.css';

// Define inline CSS for the maintenance page
const maintenanceStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f8f9fa',
  color: '#333',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

const messageStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

// Maintenance component
const Maintenance = () => (
  <div style={maintenanceStyle}>
    <div>
      <div style={messageStyle}>We'll be back soon!</div>
      <p>Please contact support for further assistance: <a href="mailto:surajjadon44936@gmail.com">surajjadon44936@gmail.com</a></p>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Maintenance />
  </React.StrictMode>
);

// Existing code commented out
/*
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
