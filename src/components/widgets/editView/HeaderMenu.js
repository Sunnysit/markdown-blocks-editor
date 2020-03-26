import React from 'react';
import TextButton from './headerMenuButtons/TextButton';

//Element Buttons
const elementBtns = [
  {
    type: 'h1',
    text: 'H1',
    defaultValue: 'Heading 1'
  },
  {
    type: 'h2',
    text: 'H2',
    defaultValue: 'Heading 2'
  },
  {
    type: 'h3',
    text: 'H3',
    defaultValue: 'Heading 3'
  },
  {
    type: 'p',
    text: 'Paragraph',
    defaultValue: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    type: 'link',
    text: 'Link',
    defaultValue: ''
  },
  {
    type: 'code',
    text: 'Code',
    defaultValue: ''
  }
];

const HeaderMenu = () => {
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
    <div className="edit-view-header">
      <ul className="element-option-list">{renderElementsButtons}</ul>
    </div>
  );
};

export default HeaderMenu;
