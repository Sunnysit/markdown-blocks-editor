import React from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeading,
  faParagraph,
  faQuoteLeft,
  faLink,
  faCode,
  faImage,
  faList,
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
        level: 1,
      },
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  //Function p element
  const addTextElement = (elementType, defaultValue = '') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      data: {
        value: defaultValue,
      },
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  //Function blockquote element
  const addBlockquoteElement = (elementType, defaultValue = '') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      data: {
        value: defaultValue,
      },
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
        linkName: 'Link',
      },
    };
    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  //Function for code element
  const addCodeElement = (elementType, defaultValue = '') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      data: {
        value: defaultValue,
        codeType: '',
      },
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  //Function for image element
  const addImageElement = (elementType, defaultValue = {}) => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      data: {
        value: defaultValue.uri,
        alt: defaultValue.alt,
      },
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  //Function for image element
  const addListElement = (elementType, defaultValue = 'ul') => {
    const newElement = {
      type: elementType,
      sid: shortid.generate(),
      data: {
        value: [''],
        listType: defaultValue,
      },
    };

    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
  };

  const renderButton = () => {
    switch (type) {
      default:
      case 'heading':
        return (
          <button
            className='element-btn'
            onClick={() => addHeadingElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faHeading} />
            <span>{text}</span>
          </button>
        );
      case 'paragraph':
        return (
          <button
            className='element-btn'
            onClick={() => addTextElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faParagraph} />
            <span>{text}</span>
          </button>
        );

      case 'blockquote':
        return (
          <button
            className='element-btn'
            onClick={() => addBlockquoteElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faQuoteLeft} />
            <span>{text}</span>
          </button>
        );

      case 'link':
        return (
          <button
            className='element-btn'
            onClick={() => addLinkElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faLink} />
            <span>{text}</span>
          </button>
        );

      case 'code':
        return (
          <button
            className='element-btn'
            onClick={() => addCodeElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faCode} />
            <span>{text}</span>
          </button>
        );

      case 'img':
        return (
          <button
            className='element-btn'
            onClick={() => addImageElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faImage} />
            <span>{text}</span>
          </button>
        );

      case 'list':
        return (
          <button
            className='element-btn'
            onClick={() => addListElement(type, defaultValue)}
          >
            <FontAwesomeIcon icon={faList} />
            <span>{text}</span>
          </button>
        );
    }
  };

  return <>{renderButton()}</>;
};

export default TextButton;
