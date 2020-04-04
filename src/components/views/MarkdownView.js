import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboard,
  faFileDownload,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

import MarkdownText from '../widgets/markdownView/MarkdownText';

const MarkdownView = ({ isVisible = false }) => {
  const outputEl = useRef(null);
  const outputTextarea = useRef(null);

  const dispatch = useDispatch();

  const markdownList = useSelector((state) => state.markdownList);

  const isEmptyList = markdownList.length === 0 ? true : false;

  const handleCloseView = () => {
    dispatch({ type: 'TOGGLE_RESULT_VIEW' });
  };

  const handleCopyToClipboard = () => {
    outputTextarea.current.textContent = outputEl.current.innerText;
    outputTextarea.current.select();
    document.execCommand('copy');
    toast.success('Text copied!', {
      className: 'success-toast',
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleDownload = () => {
    const text = outputEl.current.innerText;
    const data = new Blob([text], { type: 'text/plain' });

    const url = window.URL.createObjectURL(data);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${shortid.generate()}.md`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
        {isEmptyList ? (
          <div className='empty-list-message-container'>
            <h3 className='empty-list-message'>
              <FontAwesomeIcon icon={faFile} />
              <span>Result will be available after adding some elements.</span>
            </h3>
          </div>
        ) : (
          <>
            <p className='description'>
              Copy the content below, and paste into any *.md file or directly
              download.
            </p>
            <div className='btn-group'>
              <button onClick={handleCopyToClipboard} className='btn'>
                <FontAwesomeIcon icon={faClipboard} />
                <span>Copy</span>
              </button>
              <p>or</p>
              <button className='btn' onClick={handleDownload}>
                <FontAwesomeIcon icon={faFileDownload} />
                <span>Download</span>
              </button>
            </div>
            <div className='output-markdown' ref={outputEl}>
              {renderOutputMarkdownText}
            </div>
            <textarea
              className='clipboard-area'
              ref={outputTextarea}
            ></textarea>
          </>
        )}
      </article>
    </section>
  );
};

export default MarkdownView;
