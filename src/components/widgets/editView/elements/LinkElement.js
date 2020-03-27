import React from 'react';
import { useDispatch } from 'react-redux';

const LinkElement = ({ sid, value, linkName }) => {
  const dispatch = useDispatch();
  const handleValueChange = (e, fieldName) => {
    if (fieldName === 'url') {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            value: e.target.value,
            linkName
          }
        }
      });
    } else {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            linkName: e.target.value,
            value
          }
        }
      });
    }
  };

  return (
    <>
      <div className="input-group">
        <label className="link-value-input-label" htmlFor="link-value-input">
          Name&nbsp;
        </label>
        <input
          name="link-value-input"
          className="link-value-input"
          onChange={(e) => handleValueChange(e, 'linkName')}
          value={linkName}
          type="text"
          placeholder="Link Name"
        />
      </div>
      <div className="input-group">
        <label className="link-value-input-label" htmlFor="link-value-input">
          URL&nbsp;
        </label>
        <input
          name="link-value-input"
          className="link-value-input"
          onChange={(e) => handleValueChange(e, 'url')}
          value={value}
          type="text"
          placeholder="https://example.com"
        />
      </div>
    </>
  );
};

export default LinkElement;
