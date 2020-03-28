import React from 'react';
import { useSelector } from 'react-redux';
import PreviewElement from '../widgets/previewView/PreviewElement';

//Github Markdown Style
import 'github-markdown-css';

//Font Awesome style
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PreviewView = () => {
  const markdownList = useSelector((state) => state.markdownList);

  const isEmptyList = markdownList.length === 0 ? true : false;

  console.log(markdownList);

  const renderMarkdownList = markdownList.map((item) => {
    return <PreviewElement key={item.sid} element={item} />;
  });

  return (
    <article className='review-view view'>
      <h2 className='view-title preview-tittle'>
        <FontAwesomeIcon icon={faEye} /> Preview
      </h2>
      {isEmptyList ? (
        <div className='empty-list-message-container'>
          <h3 className='empty-list-message'>
            <FontAwesomeIcon icon={faEye} />
            <span>Preview is displayed when some elements are added.</span>
          </h3>
        </div>
      ) : (
        <div className='markdown-body'>{renderMarkdownList}</div>
      )}
    </article>
  );
};

export default PreviewView;
