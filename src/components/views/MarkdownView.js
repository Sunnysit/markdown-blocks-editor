import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MarkdownText from '../widgets/markdownView/MarkdownText';

const MarkdownView = ({ isVisible = false }) => {
  const dispatch = useDispatch();

  const markdownList = useSelector((state) => state.markdownList);

  const handleCloseView = () => {
    dispatch({ type: 'TOGGLE_RESULT_VIEW' });
  };

  const renderOutputMarkdownText = markdownList.map((element) => {
    return <MarkdownText key={element.sid} element={element} />;
  });

  return (
    <section
      className={
        isVisible ? 'output-markdown-window' : 'output-markdown-window hide'
      }
    >
      <div onClick={handleCloseView} className='background-cover'></div>
      <article className='markdown-text-container'>
        <h2 className='title'>Markdown Text Result</h2>
        <p className='description'>
          Copy the content below, and paste into any *.md file.
        </p>
        <div className='output-markdown'>{renderOutputMarkdownText}</div>
      </article>
    </section>
  );
};

export default MarkdownView;
