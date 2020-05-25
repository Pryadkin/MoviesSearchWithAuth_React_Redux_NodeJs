import React, { useEffect } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { useRoutes } from './routes';
import { useSelector, useDispatch } from 'react-redux';
import { useHttp } from './hooks/http.hook';
import { getMoviesFromProfileOnServer } from './redux/actions';

import './App.scss';

function App() {
  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
  const userData = useSelector(state => state.authReducer.userData);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);
  const routes = useRoutes(isAuthenticated);
  const { request } = useHttp();
  const dispatch = useDispatch();


  useEffect(() => {
    if (userData) {
      async function fetchData() {
        try {
          const movies = await request('http://localhost:5000/api/movies/add', 'PATCH', { userId: userData.userId, movies: profileMovies });
          if (movies) dispatch(getMoviesFromProfileOnServer(movies));
        } catch (err) { }
      }
      fetchData();
    }
  }, [profileMovies, userData]);

  return (
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router>
  );
}

export default App;
