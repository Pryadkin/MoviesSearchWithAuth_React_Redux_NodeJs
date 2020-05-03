import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const routes = useRoutes(false);
  return (
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
