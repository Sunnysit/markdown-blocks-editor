import React from 'react';
import { useSelector } from 'react-redux';
import ReviewElement from '../widgets/reviewView/ReviewElement';
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

const ReviewView = () => {
  const markdownList = useSelector((state) => state.markdownList);

  console.log(markdownList);

  const renderMarkdownList = markdownList.map((item) => {
    return <ReviewElement key={item.sid} element={item} />;
  });

  return (
    <article className="review-view view" style={styles.container}>
      <HeaderMenu />
      <div className="markdown-body">
        <h1>Unicorns</h1>
        <p>All the things</p>
        <pre>
          <code>$ yarn</code>
        </pre>
        {renderMarkdownList}
      </div>
    </article>
  );
};

export default ReviewView;
