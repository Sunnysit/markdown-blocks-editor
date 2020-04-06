import React from 'react';

const SupportElementsTable = () => {
  const elements = [
    { name: 'Heading', isSupport: true },
    { name: 'Paragraph', isSupport: true },
    { name: 'Blockquote', isSupport: true },
    { name: 'Link', isSupport: true },
    { name: 'List', isSupport: true },
    { name: 'Code block', isSupport: true },
    { name: 'Image', isSupport: true },
    { name: 'Table', isSupport: false },
  ];

  const renderTableItem = elements.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>
          {item.isSupport ? (
            <span role='img' aria-label='support'>
              ✅
            </span>
          ) : (
            <span>Coming soon</span>
          )}
        </td>
      </tr>
    );
  });

  return (
    <table className='description-table'>
      <thead>
        <tr>
          <th>Element</th>
          <th>Support</th>
        </tr>
      </thead>
      <tbody>{renderTableItem}</tbody>
    </table>
  );
};

export default SupportElementsTable;
