import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main_page from './1main';
import reportWebVitals from './reportWebVitals';
import Umair from './umair';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Main_page></Main_page>
{/* <Umair></Umair> */}
  </React.StrictMode>
);
reportWebVitals();
