import React from 'react';
import { useSelector } from 'react-redux';

import HeaderMenu from '../widgets/editView/HeaderMenu';
import TextElement from '../widgets/editView/elements/TextElement';
import LinkElement from '../widgets/editView/elements/LinkElement';

const styles = {
  container: {
    width: '50%',
    overflow: 'auto'
  }
};

const EditView = () => {
  const markdownList = useSelector((state) => state.markdownList);

  const renderList = () => {
    const outputList = markdownList.map((item, index) => {
      const value = item.value ? item.value : '';
      let element = (
        <TextElement
          index={index}
          value={value}
          sid={item.sid}
          type={item.type}
        />
      );
      switch (item.type) {
        default:
          break;
        case 'link':
          element = (
            <LinkElement
              index={index}
              value={value}
              sid={item.sid}
              type={item.type}
              linkName={item.linkName}
            />
          );
      }

      return <li key={item.sid}>{element}</li>;
    });

    return outputList;
  };

  return (
    <article className="edit-view view" style={styles.container}>
      <HeaderMenu />
      <ul className="elements-list">{renderList()}</ul>
    </article>
  );
};

export default EditView;
