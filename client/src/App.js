import React, { useEffect } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { useRoutes } from './routes';
import { useSelector } from 'react-redux';
import { useHttp } from './hooks/http.hook';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);
  const routes = useRoutes(isAuthenticated);
  const { loading, request, error, clearError } = useHttp();

  useEffect(() => {
    if (profileMovies.length !== 0) {
      console.log(profileMovies)
      async function fetchData() {
        try {
          const data = await request('http://localhost:5000/api/movie/add', 'POST', { profileMovies });
        } catch (err) { }
      }
      fetchData();
    }
  }, [profileMovies]);

  return (
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router>
  );
}

export default App;
