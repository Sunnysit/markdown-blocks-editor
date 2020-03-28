import React from 'react';

const ListElement = ({ listType, items }) => {
  const renderList = () => {
    const listItems = items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    if (listType === 'ul') {
      return <ul>{listItems}</ul>;
    } else {
      return <ol>{listItems}</ol>;
    }
  };

  return <>{renderList()}</>;
};

export default ListElement;
