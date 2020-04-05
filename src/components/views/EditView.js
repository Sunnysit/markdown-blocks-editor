import React from 'react';
import { useSelector } from 'react-redux';

// import HeaderMenu from '../widgets/editView/HeaderLeftMenu';
import BasicElementLayout from '../widgets/editView/elements/BasicElementLayout';
import HeadingElement from '../widgets/editView/elements/HeadingElement';
import TextElement from '../widgets/editView/elements/TextElement';
import BlockquoteElement from '../widgets/editView/elements/BlockquoteElement';
import LinkElement from '../widgets/editView/elements/LinkElement';
import CodeElement from '../widgets/editView/elements/CodeElement';
import ImgElement from '../widgets/editView/elements/ImgElement';
import ListElement from '../widgets/editView/elements/ListElement';

//Font Awesome icons
import {
  faLink,
  faParagraph,
  faHeading,
  faCode,
  faImage,
  faList,
  faEdit,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditView = () => {
  const markdownList = useSelector((state) => state.markdownList);
  const currentDisplayMode = useSelector((state) => state.currentDisplayMode);

  const mobileHiddenClasses =
    currentDisplayMode === 'edit'
      ? 'edit-view view'
      : 'edit-view view mobile-hidden';

  const isEmptyList = markdownList.length === 0 ? true : false;

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
              title='Heading'
            >
              <HeadingElement
                value={item.data.value}
                sid={item.sid}
                level={item.data.level}
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
              title='Link'
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
              title='Paragraph'
            >
              <TextElement value={item.data.value} sid={item.sid} />
            </BasicElementLayout>
          );
          break;

        case 'blockquote':
          element = (
            <BasicElementLayout
              sid={item.sid}
              index={index}
              icon={faQuoteLeft}
              title='Blockquote'
            >
              <BlockquoteElement value={item.data.value} sid={item.sid} />
            </BasicElementLayout>
          );
          break;
        case 'code':
          element = (
            <BasicElementLayout
              sid={item.sid}
              index={index}
              icon={faCode}
              title='Code'
            >
              <CodeElement
                codeType={item.data.codeType}
                value={item.data.value}
                sid={item.sid}
              />
            </BasicElementLayout>
          );
          break;

        case 'img':
          element = (
            <BasicElementLayout
              sid={item.sid}
              index={index}
              icon={faImage}
              title='Image'
            >
              <ImgElement
                alt={item.data.alt}
                value={item.data.value}
                sid={item.sid}
              />
            </BasicElementLayout>
          );
          break;

        case 'list':
          element = (
            <BasicElementLayout
              sid={item.sid}
              index={index}
              icon={faList}
              title='List'
            >
              <ListElement
                listType={item.data.listType}
                value={item.data.value}
                sid={item.sid}
              />
            </BasicElementLayout>
          );
          break;
      }

      return (
        <li className='element-item' key={item.sid}>
          {element}
        </li>
      );
    });

    return outputList;
  };

  return (
    <article className={mobileHiddenClasses}>
      <h2 className='view-title'>
        <FontAwesomeIcon icon={faEdit} /> Editor
      </h2>
      {isEmptyList ? (
        <div className='empty-list-message-container'>
          <h3 className='empty-list-message'>
            <FontAwesomeIcon icon={faEdit} />
            <span>Add some elements by clicking the buttons above.</span>
          </h3>
        </div>
      ) : (
        <ul className='elements-list'>{renderList()}</ul>
      )}
    </article>
  );
};

export default EditView;
