import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>       ///из за этого два вызова в useEffect
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function