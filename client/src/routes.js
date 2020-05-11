import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import SearchFilmsPage from './pages/SearchFilmsPage';
import { AuthPage } from './pages/AuthPage/AuthPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/search" exact>
          <SearchFilmsPage />
        </Route>
        <Route path="/logout" exact>
          <AuthPage />
        </Route>
        <Redirect to="/profile" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
};