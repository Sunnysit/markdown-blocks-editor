import React from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeading,
  faParagraph,
  faLink,
  faCode
} from '@fortawesome/free-solid-svg-icons';

const TextButton = ({ type, text, defaultValue }) => {
  const dispatch = useDispatch();

  //Function heading element
  const addHeadingElement = (elementType, defaultValue = '') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      data: {
        value: defaultValue,
        level: 1
      }
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  //Function p element
  const addTextElement = (elementType, defaultValue = '') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      data: {
        value: defaultValue
      }
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  //Function for link element
  const addLinkElement = (elementType, defaultValue = '') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      data: {
        value: defaultValue,
        linkName: 'Link'
      }
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  const renderButton = () => {
    switch (type) {
      default:
      case 'heading':
        return (
          <button
            className="element-btn"
            onClick={() => addHeadingElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faHeading} />
            <span>{text}</span>
          </button>
        );
      case 'paragraph':
        return (
          <button
            className="element-btn"
            onClick={() => addTextElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faParagraph} />
            <span>{text}</span>
          </button>
        );

      case 'link':
        return (
          <button
            className="element-btn"
            onClick={() => addLinkElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faLink} />
            <span>{text}</span>
          </button>
        );

      case 'code':
        return (
          <button
            className="element-btn"
            onClick={() => addLinkElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faCode} />
            <span>{text}</span>
          </button>
        );
    }
  };

  return <>{renderButton()}</>;
};

export default TextButton;
