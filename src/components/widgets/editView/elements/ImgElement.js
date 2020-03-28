import React from 'react';
import { useDispatch } from 'react-redux';

const ImgElement = ({ sid, value, alt }) => {
  const dispatch = useDispatch();
  const handleValueChange = (e, fieldName) => {
    if (fieldName === 'uri') {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            value: e.target.value,
            alt
          }
        }
      });
    } else {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            alt: e.target.value,
            value
          }
        }
      });
    }
  };

  return (
    <>
      <div className='uri-input-group input-group'>
        <label className='uri-value-input-label' htmlFor='uri-value-input'>
          Uri&nbsp;
        </label>
        <input
          name='uri-value-input'
          className='uri-value-input element-value-input '
          onChange={(e) => handleValueChange(e, 'uri')}
          value={value}
          type='text'
          placeholder='Image link goes here...'
        />
      </div>
      <div className='input-group'>
        <label className='alt-value-input-label' htmlFor='alt-value-input'>
          &nbsp;Alt&nbsp;
        </label>
        <input
          name='alt-value-input'
          className='alt-value-input element-value-input '
          onChange={(e) => handleValueChange(e, 'alt')}
          value={alt}
          type='text'
          placeholder='image alt'
        />
      </div>
    </>
  );
};

export default ImgElement;
