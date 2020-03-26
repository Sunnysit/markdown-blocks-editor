import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faChevronUp,
  faChevronDown,
  faLink
} from '@fortawesome/free-solid-svg-icons';

const LinkElement = ({ index, sid, value, linkName }) => {
  const markdownList = useSelector((state) => state.markdownList);

  const dispatch = useDispatch();
  const handleLinkURLChange = (e) => {
    dispatch({
      type: 'CHANGE_ELEMENT_CONTENT',
      payload: {
        sid,
        value: e.target.value
      }
    });
  };

  const handleLinkNameChange = (e) => {
    dispatch({
      type: 'CHANGE_LINK_NAME',
      payload: {
        sid,
        linkName: e.target.value
      }
    });
  };

  const handleDeleteElement = () => {
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: {
        sid
      }
    });
  };

  const handlerOrderChange = (direction) => {
    let targetElementIndex = -1;
    const targetElement = markdownList.find((item, index) => {
      if (item.sid === sid) {
        targetElementIndex = index;
        return item;
      }
      return false;
    });
    let modifiedList = markdownList;
    //Remove target item
    modifiedList.splice(targetElementIndex, 1);
    //Reset the whole list and apply new list below
    dispatch({ type: 'RESET_LIST' });
    if (direction === 'up') {
      //Add item back order move forward
      modifiedList.splice(targetElementIndex - 1, 0, targetElement);
      dispatch({ type: 'UPDATE_NEW_LIST', payload: { modifiedList } });
    } else {
      //Add item back order move backward
      modifiedList.splice(targetElementIndex + 1, 0, targetElement);

      dispatch({ type: 'UPDATE_NEW_LIST', payload: { modifiedList } });
    }
  };

  return (
    <div className="element-container">
      <div className="order-handlers">
        {index !== 0 && (
          <button
            onClick={() => handlerOrderChange('up')}
            className="order-handle-btn"
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        )}
        <span className="element-index">{index + 1}</span>
        {index !== markdownList.length - 1 && (
          <button
            className="order-handle-btn"
            onClick={() => handlerOrderChange('down')}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        )}
      </div>
      <div className="element-info-container">
        <div className="header">
          <p className="element-type">
            <FontAwesomeIcon icon={faLink} />
            <span>Link</span>
          </p>
          <button className="delete-btn" onClick={handleDeleteElement}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="main-content">
          <div className="input-group">
            <label
              className="link-value-input-label"
              htmlFor="link-value-input"
            >
              Name&nbsp;
            </label>
            <input
              name="link-value-input"
              className="link-value-input"
              onChange={handleLinkNameChange}
              value={linkName}
              type="text"
              placeholder="Link Name"
            />
          </div>
          <div className="input-group">
            <label
              className="link-value-input-label"
              htmlFor="link-value-input"
            >
              URL&nbsp;
            </label>
            <input
              name="link-value-input"
              className="link-value-input"
              onChange={handleLinkURLChange}
              value={value}
              type="text"
              placeholder="https://example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkElement;
