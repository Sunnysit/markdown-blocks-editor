import React from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const TextButton = ({ type, text, defaultValue }) => {
  const dispatch = useDispatch();

  //Function for h1 - h6 & p element
  const addTextElement = (elementType, defaultValue = '') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      value: defaultValue
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  //Function for link element
  const addLinkElement = (elementType, defaultValue = '') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      value: defaultValue,
      linkName: 'Link'
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  const renderButton = () => {
    switch (type) {
      default:
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'p':
        return (
          <button
            className="element-btn"
            onClick={() => addTextElement(type, defaultValue)}
          >
            {text}
          </button>
        );

      case 'link':
        return (
          <button
            className="element-btn"
            onClick={() => addLinkElement(type, defaultValue)}
          >
            {text}
          </button>
        );
    }
  };

  return <>{renderButton()}</>;
};

export default TextButton;
