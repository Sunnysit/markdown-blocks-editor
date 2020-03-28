import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Components
import Header from './components/container/Header';
import Body from './components/container/Body';
import Footer from './components/container/Footer';

toast.configure({
  autoClose: 4000
});

function App() {
  return (
    <div className='app'>
      {/* <Header /> */}
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
