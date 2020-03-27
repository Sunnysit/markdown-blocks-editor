import React from 'react';
import { useDispatch } from 'react-redux';

const CodeElement = ({ sid, value, codeType }) => {
  const dispatch = useDispatch();

  const handleContentChange = (e, fieldName) => {
    if (fieldName === 'code-type') {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            value,
            codeType: e.target.value
          }
        }
      });
    } else {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            value: e.target.value,
            codeType
          }
        }
      });
    }
  };

  return (
    <div className='main-content'>
      <div className='heading-input-group'>
        <select
          className='heading-level-select'
          onChange={(e) => handleContentChange(e, 'code-type')}
          value={codeType}
        >
          <option value='javascript'>JavaScript</option>
          <option value='python'>Python</option>
          <option value='java'>Java</option>
        </select>
        <textarea
          rows={6}
          onChange={(e) => handleContentChange(e, 'content')}
          className='element-value-input'
          value={value}
        />
      </div>
    </div>
  );
};

export default CodeElement;
