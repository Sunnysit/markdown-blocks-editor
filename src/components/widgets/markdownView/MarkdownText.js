import React from 'react';

const MarkdownText = ({ element }) => {
  const renderText = () => {
    switch (element.type) {
      default:
      case 'paragraph':
        return element.data.value;
      case 'heading':
        let output = '';
        switch (element.data.level) {
          default:
          case 1:
            output = `# ${element.data.value}`;
            break;
          case 2:
            output = `## ${element.data.value}`;
            break;
          case 3:
            output = `### ${element.data.value}`;
            break;
          case 4:
            output = `#### ${element.data.value}`;
            break;
          case 5:
            output = `##### ${element.data.value}`;
            break;
          case 6:
            output = `###### ${element.data.value}`;
            break;
        }
        return output;
      case 'link':
        return `[${element.data.linkName}](${element.data.value})`;
    }
  };

  return (
    <>
      {renderText()}
      <br />
      <br />
    </>
  );
};

export default MarkdownText;
