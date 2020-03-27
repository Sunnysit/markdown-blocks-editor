import React from 'react';

import HeadingElement from './elements/HeadingElement';

const ReviewElement = ({ element }) => {
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
    case 'link':
      renderItem = (
        <p>
          <a target="blank" href={element.data.value}>
            {element.data.linkName}
          </a>
        </p>
      );
      break;
  }

  return <>{renderItem}</>;
};

export default ReviewElement;
