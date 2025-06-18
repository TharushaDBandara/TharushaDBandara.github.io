
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.simple';

console.log('🚀 JavaScript is executing!');
console.log('🔍 Looking for root element...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('❌ Could not find root element!');
  throw new Error("Could not find root element to mount to");
}

console.log('✅ Root element found:', rootElement);
console.log('🎯 Mounting React app...');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('✅ React app mounted successfully!');
    