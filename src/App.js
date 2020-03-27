import React from 'react';
import { useSelector } from 'react-redux';

//Components
import Header from './components/container/Header';
import Body from './components/container/Body';
import Footer from './components/container/Footer';
import MarkdownView from './components/views/MarkdownView';

function App() {
  const showResultView = useSelector((state) => state.showResultView);

  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
      <MarkdownView isVisible={showResultView} />
    </div>
  );
}

export default App;
