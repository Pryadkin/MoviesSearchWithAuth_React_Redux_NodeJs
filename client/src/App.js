import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const { token, login, logout, userId } = useAuth;
  const isAuthenticated = !!token;
  const routes = useRoutes(false);
  console.log(useAuth)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
        <div className="App">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
