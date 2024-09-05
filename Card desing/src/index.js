import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Cart from './Cart';
// import UserDetails from './UserDetails';
import RegForm from './RegForm';
// import QrCode from './QrCode';
// import UserCard from './UserCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <UserCard/> */}
    {/* <QrCode/> */}
    {/* <Cart/> */}
    {/* <UserDetails/> */}
    <RegForm/>
  </React.StrictMode>
);

