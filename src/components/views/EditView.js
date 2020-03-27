import React from 'react';
import { useSelector } from 'react-redux';

import HeaderMenu from '../widgets/editView/HeaderMenu';
import BasicElementLayout from '../widgets/editView/elements/BasicElementLayout';
import HeadingElement from '../widgets/editView/elements/HeadingElement';
import TextElement from '../widgets/editView/elements/TextElement';
import LinkElement from '../widgets/editView/elements/LinkElement';

//Font Awesome icons
import {
  faLink,
  faParagraph,
  faHeading
} from '@fortawesome/free-solid-svg-icons';

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
      let element = (
        <TextElement
          index={index}
          value={item.data.value}
          sid={item.sid}
          type={item.type}
        />
      );
      switch (item.type) {
        default:
          break;

        case 'heading':
          element = (
            <BasicElementLayout
              sid={item.sid}
              index={index}
              icon={faHeading}
              title="Heading"
            >
              <HeadingElement
                index={index}
                value={item.data.value}
                sid={item.sid}
                type={item.type}
              />
            </BasicElementLayout>
          );
          break;
        case 'link':
          element = (
            <BasicElementLayout
              sid={item.sid}
              index={index}
              icon={faLink}
              title="Link"
            >
              <LinkElement
                value={item.data.value}
                sid={item.sid}
                type={item.type}
                linkName={item.data.linkName}
              />
            </BasicElementLayout>
          );
          break;
        case 'paragraph':
          element = (
            <BasicElementLayout
              sid={item.sid}
              index={index}
              icon={faParagraph}
              title="Paragraph"
            >
              <TextElement value={item.data.value} sid={item.sid} />
            </BasicElementLayout>
          );
          break;
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
