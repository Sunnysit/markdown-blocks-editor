import React from 'react';
import { useDispatch } from 'react-redux';

const HeadingElement = ({ sid, value, level }) => {
  const dispatch = useDispatch();

  const handleContentChange = (e, fieldName) => {
    if (fieldName === 'level') {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            value,
            level: parseInt(e.target.value)
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
            level
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
          onChange={(e) => handleContentChange(e, 'level')}
          value={level}
        >
          <option value={1}>Heading 1</option>
          <option value={2}>Heading 2</option>
          <option value={3}>Heading 3</option>
          <option value={4}>Heading 4</option>
          <option value={5}>Heading 5</option>
          <option value={6}>Heading 6</option>
        </select>
        <input
          className='element-value-input'
          onChange={(e) => handleContentChange(e, 'content')}
          value={value}
          type='text'
        />
      </div>
    </div>
  );
};

export default HeadingElement;
