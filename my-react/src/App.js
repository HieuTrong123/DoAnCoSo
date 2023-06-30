import React from 'react';
import './App.css';
import Router from './router/router';
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
