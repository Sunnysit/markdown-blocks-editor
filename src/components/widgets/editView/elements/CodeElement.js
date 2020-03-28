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
      <div className='code-input-container'>
        <div className='input-group'>
          <label
            className='code-type-value-input-label sr-only'
            htmlFor='code-type-value-input'
          >
            Code Language&nbsp;
          </label>
          <input
            name='code-type-value-input'
            type='text'
            className='code-type-value-input element-value-input'
            onChange={(e) => handleContentChange(e, 'code-type')}
            value={codeType}
            placeholder='Code Language'
          />
        </div>
        <textarea
          rows={6}
          onChange={(e) => handleContentChange(e, 'content')}
          className='element-value-input'
          value={value}
          placeholder='Paste your code here...'
        />
      </div>
    </div>
  );
};

export default CodeElement;
