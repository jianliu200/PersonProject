import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
/*
 * handles translate, homepage across all users, and login
 *
 * @version 1.0.1
 * @author Anna Huang
 * @author Eric Nunes
 */
//rendering the front end
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <App />
    
    </BrowserRouter>
  </React.StrictMode>
  
  , 
  // document.querySelector('#root')
)/*"start": "react-scripts start"*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals