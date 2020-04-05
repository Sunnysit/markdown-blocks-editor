import React from 'react';

const MarkdownText = ({ element }) => {
  const renderText = () => {
    switch (element.type) {
      default:
      case 'paragraph':
        return element.data.value;

      case 'blockquote':
        return `> ${element.data.value}`;

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

      case 'code':
        return (
          <>
            <span>
              ```{element.data.codeType && element.data.codeType.toLowerCase()}
            </span>
            <pre className='code-block'>
              <code>{element.data.value}</code>
            </pre>
            <span>```</span>
          </>
        );

      case 'img':
        return `![${element.data.alt}](${element.data.value})`;

      case 'list':
        return element.data.listType === 'ul' ? (
          <>
            {element.data.value.map((item, index) => {
              return <div key={index}>* {item}</div>;
            })}
          </>
        ) : (
          <>
            {element.data.value.map((item, index) => {
              return (
                <div key={index}>
                  {index + 1}. {item}
                </div>
              );
            })}
          </>
        );
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
