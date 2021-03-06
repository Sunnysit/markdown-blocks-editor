import React from 'react';
import TextButton from './headerMenuButtons/TextButton';

//Element Buttons
const elementBtns = [
  {
    type: 'heading',
    text: 'Heading',
    defaultValue: 'Heading',
  },
  {
    type: 'paragraph',
    text: 'Paragraph',
    defaultValue: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    type: 'blockquote',
    text: 'Blockquote',
    defaultValue: '',
  },
  {
    type: 'link',
    text: 'Link',
    defaultValue: '',
  },
  {
    type: 'list',
    text: 'List',
    defaultValue: 'ul',
  },
  {
    type: 'code',
    text: 'Code',
    defaultValue: `function hello() {
      console.log('Hello World!');
    }`,
  },
  {
    type: 'img',
    text: 'Image',
    defaultValue: {
      uri: 'http://source.unsplash.com/random/150x150/?animal',
      alt: 'image alt',
    },
  },
];

const HeaderLeftMenu = () => {
  const renderElementsButtons = elementBtns.map((button, index) => {
    return (
      <li key={index}>
        <TextButton
          type={button.type}
          text={button.text}
          defaultValue={button.defaultValue}
        />
      </li>
    );
  });

  return (
    <div className='edit-view-header'>
      <ul className='element-option-list'>{renderElementsButtons}</ul>
    </div>
  );
};

export default HeaderLeftMenu;
