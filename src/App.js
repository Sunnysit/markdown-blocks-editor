import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Components
import HomeView from './components/views/HomeView';
import Main from './components/container/Main';
import Footer from './components/container/Footer';

toast.configure({
  autoClose: 4000,
});

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomeView />
          </Route>
          <Route path='/editor'>
            <Main />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
