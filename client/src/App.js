import React, { useEffect } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { useSelector } from 'react-redux';
import { useStateToLocalStorage } from './hooks/stateStorage.hook';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const { token, login, logout, userData } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  const stateMovies = useSelector(state => state.movieSearchReducer.profileMovies);
  const setStateToLocalStorage = useStateToLocalStorage();

  useEffect(() => {
    setStateToLocalStorage(stateMovies);
  }, [stateMovies])

  return (
    <AuthContext.Provider value={{
      token, userData, login, logout, isAuthenticated
    }}>
      <Router>
        <div className="App">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
