import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/loginForm/LoginForm';
import SignUpForm from './components/auth/signupForm/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import { authenticate } from './store/session';
import FourOhFourPage from './components/404Page';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>

      <Switch>

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>

        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <ProtectedRoute path='/channels/@me' exact={true}>
          <MainPage dmShow={true} />

        </ProtectedRoute>

        <ProtectedRoute path='/channels/@me/:serverId' exact={true}>
          <MainPage dmShow={true} />
        </ProtectedRoute>

        <ProtectedRoute path='/channels/:serverId/:channelId' exact={true}>
          <MainPage dmShow={false} />
        </ProtectedRoute>

        <ProtectedRoute path='/channels/:serverId' exact={true}>
          <MainPage dmShow={false} />
        </ProtectedRoute>

        <ProtectedRoute path='/channels' exact={true}>
          <MainPage dmShow={false} />

        </ProtectedRoute>

        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>

        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route>
          {/* <h1>THIS IS A 404</h1> */}
          <FourOhFourPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
