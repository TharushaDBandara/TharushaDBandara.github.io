import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ 
      color: 'white', 
      padding: '20px', 
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Portfolio Test - React is Working!</h1>
      <p style={{ fontSize: '18px' }}>If you can see this, React is mounting correctly.</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        backgroundColor: '#1e293b', 
        borderRadius: '8px' 
      }}>
        <p>✅ React is loaded</p>
        <p>✅ CSS is loaded</p>
        <p>✅ JavaScript is executing</p>
      </div>
    </div>
  );
};

export default App;
