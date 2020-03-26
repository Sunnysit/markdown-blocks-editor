import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faChevronUp,
  faChevronDown,
  faHeading,
  faParagraph
} from '@fortawesome/free-solid-svg-icons';

const TextElement = ({ index, type, sid, value }) => {
  const markdownList = useSelector((state) => state.markdownList);

  const dispatch = useDispatch();

  let elementType = 'Unknown';
  let classList = 'element-value-input';

  switch (type) {
    default:
      break;
    case 'h1':
      elementType = 'Heading 1';
      break;
    case 'h2':
      elementType = 'Heading 2';
      break;
    case 'h3':
      elementType = 'Heading 3';
      break;
    case 'h4':
      elementType = 'Heading 4';
      break;
    case 'h5':
      elementType = 'Heading 5';
      break;
    case 'h6':
      elementType = 'Heading 6';
      break;
    case 'p':
      elementType = 'Paragraph';
      classList = 'element-value-input paragraph';
      break;
  }

  const handleContentChange = (e) => {
    dispatch({
      type: 'CHANGE_ELEMENT_CONTENT',
      payload: {
        sid,
        value: e.target.value
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
            {type === 'p' ? (
              <FontAwesomeIcon icon={faParagraph} />
            ) : (
              <FontAwesomeIcon icon={faHeading} />
            )}

            <span>{elementType}</span>
          </p>
          <button className="delete-btn" onClick={handleDeleteElement}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="main-content">
          {type === 'p' ? (
            <textarea
              onChange={handleContentChange}
              className={classList}
              value={value}
            />
          ) : (
            <input
              className={classList}
              onChange={handleContentChange}
              value={value}
              type="text"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TextElement;
