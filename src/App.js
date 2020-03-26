import React from 'react';
import Header from './components/container/Header';
import Body from './components/container/Body';
import Footer from './components/container/Footer';
import MarkdownView from './components/views/MarkdownView';

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
      <MarkdownView isVisible={false} />
    </div>
  );
}

export default App;
