import React from 'react';
import { useSelector } from 'react-redux';
import PreviewElement from '../widgets/reviewView/PreviewElement';
import HeaderMenu from '../widgets/reviewView/HeaderMenu';

//Github Markdown Style
import 'github-markdown-css';

const styles = {
  container: {
    boxSizing: 'border-box',
    width: '50%',
    borderLeft: '1px solid black'
  }
};

const PreviewView = () => {
  const markdownList = useSelector((state) => state.markdownList);

  console.log(markdownList);

  const renderMarkdownList = markdownList.map((item) => {
    return <PreviewElement key={item.sid} element={item} />;
  });

  return (
    <article className='review-view view' style={styles.container}>
      <HeaderMenu />
      <div className='markdown-body'>{renderMarkdownList}</div>
      {/* http://source.unsplash.com/random/200x200/?animal */}
    </article>
  );
};

export default PreviewView;
