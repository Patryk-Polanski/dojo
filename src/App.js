import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext';

import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                {user ? <Dashboard /> : <Redirect to='/login' />}
              </Route>
              <Route path='/create'>
                {user ? <Create /> : <Redirect to='/login' />}
              </Route>
              <Route path='/projects/:id'>
                {user ? <Project /> : <Redirect to='/login' />}
              </Route>
              <Route path='/login'>
                {user ? <Redirect to='/' /> : <Login />}
              </Route>
              <Route path='/signup'>
                {user ? <Redirect to='/' /> : <Signup />}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
