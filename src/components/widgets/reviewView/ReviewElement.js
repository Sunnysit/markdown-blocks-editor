import React from 'react';

const ReviewElement = ({ element }) => {
  let renderItem;

  switch (element.type) {
    default:
      break;
    case 'h1':
      renderItem = <h1>{element.value}</h1>;
      break;
    case 'h2':
      renderItem = <h2>{element.value}</h2>;
      break;
    case 'h3':
      renderItem = <h3>{element.value}</h3>;
      break;
    case 'h4':
      renderItem = <h4>{element.value}</h4>;
      break;
    case 'h5':
      renderItem = <h5>{element.value}</h5>;
      break;
    case 'h6':
      renderItem = <h6>{element.value}</h6>;
      break;
    case 'p':
      renderItem = <p>{element.value}</p>;
      break;
    case 'link':
      renderItem = (
        <p>
          <a target="blank" href={element.value}>
            {element.linkName}
          </a>
        </p>
      );
      break;
  }

  return <>{renderItem}</>;
};

export default ReviewElement;
