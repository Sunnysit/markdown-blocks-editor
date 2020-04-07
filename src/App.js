import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Components
import HomeView from './components/views/HomeView';
import AboutView from './components/views/AboutView';
import Main from './components/container/Main';

toast.configure({
  autoClose: 4000,
});

//For Google Analytics
ReactGA.initialize('UA-121232788-4');
ReactGA.pageview('/home');

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
          <Route path='/about'>
            <AboutView />
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
