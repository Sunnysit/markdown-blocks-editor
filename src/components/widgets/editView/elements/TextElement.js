import React from 'react';
import { useDispatch } from 'react-redux';

const TextElement = ({ sid, value }) => {
  const dispatch = useDispatch();

  const handleContentChange = (e) => {
    dispatch({
      type: 'CHANGE_ELEMENT_CONTENT',
      payload: {
        sid,
        data: {
          value: e.target.value
        }
      }
    });
  };

  return (
    <div className='main-content'>
      <textarea
        rows={4}
        onChange={handleContentChange}
        className='element-value-input paragraph'
        value={value}
        placeholder='Text content goes here...'
      />
    </div>
  );
};

export default TextElement;
