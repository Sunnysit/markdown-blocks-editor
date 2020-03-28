import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

import MarkdownText from '../widgets/markdownView/MarkdownText';

const MarkdownView = ({ isVisible = false }) => {
  const outputEl = useRef(null);
  const outputTextarea = useRef(null);

  const dispatch = useDispatch();

  const markdownList = useSelector((state) => state.markdownList);

  const handleCloseView = () => {
    dispatch({ type: 'TOGGLE_RESULT_VIEW' });
  };

  const handleCopyToClipboard = () => {
    outputTextarea.current.textContent = outputEl.current.innerText;
    outputTextarea.current.select();
    document.execCommand('copy');
    toast.success('Text copied!', { className: 'success-toast' });
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
        <div className='btn-group'>
          <button onClick={handleCopyToClipboard} className='btn'>
            <FontAwesomeIcon icon={faClipboard} />
            <span>Copy</span>
          </button>
          {/* <p>or</p>
          <button className='btn'>
            <FontAwesomeIcon icon={faFileExport} />
            <span>Export</span>
          </button> */}
        </div>
        <div className='output-markdown' ref={outputEl}>
          {renderOutputMarkdownText}
        </div>
        <textarea className='clipboard-area' ref={outputTextarea}></textarea>
      </article>
    </section>
  );
};

export default MarkdownView;
