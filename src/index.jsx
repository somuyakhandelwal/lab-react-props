import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataComponent from './components/DataComponent';
import AppClass from './AppClass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App myData = {DataComponent} /> */}
    <AppClass myData = {DataComponent} />   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
