import React,{useState} from 'react'
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import App from './landingPage/App.jsx';
import Apps from './HomePage/Apps.jsx';
import Sign from './landingPage/SignUp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
<Router>
<Routes>
 <Route exact path="/" element={<App />} />
 <Route path="/home" element={<Apps/>}/>
 <Route path="/signup" element={<Sign/>}/>
 </Routes>
 </Router>
  </>,
)
