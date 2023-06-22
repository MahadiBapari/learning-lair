import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TuitionsContextProvider } from './Context/TuitionsContext';
import { AuthContextProvider } from "./Context/AuthContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <TuitionsContextProvider>
        <AuthContextProvider>
    
            <App />
        </AuthContextProvider>      
    </TuitionsContextProvider>  
      
  </React.StrictMode>
);

