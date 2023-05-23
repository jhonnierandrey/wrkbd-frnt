import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


import WorkoutContextProvider from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();