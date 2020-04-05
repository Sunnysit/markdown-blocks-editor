import React from 'react';

import HeadingElement from './elements/HeadingElement';
import ListElement from './elements/ListElement';

const PreviewElement = ({ element }) => {
  let renderItem;

  switch (element.type) {
    default:
      break;
    case 'heading':
      renderItem = (
        <HeadingElement level={element.data.level}>
          {element.data.value}
        </HeadingElement>
      );
      break;
    case 'paragraph':
      renderItem = <p>{element.data.value}</p>;
      break;

    case 'blockquote':
      renderItem = <blockquote>{element.data.value}</blockquote>;
      break;
    case 'link':
      renderItem = (
        <p>
          <a target='blank' href={element.data.value}>
            {element.data.linkName}
          </a>
        </p>
      );
      break;
    case 'code':
      renderItem = (
        <pre>
          <code>{element.data.value}</code>
        </pre>
      );
      break;

    case 'img':
      renderItem = (
        <p>
          <img src={element.data.value} alt={element.data.alt} />
        </p>
      );
      break;

    case 'list':
      renderItem = (
        <ListElement
          listType={element.data.listType}
          items={element.data.value}
        />
      );
      break;
  }

  return <>{renderItem}</>;
};

export default PreviewElement;
