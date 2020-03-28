import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const ListElement = ({ sid, value, listType }) => {
  const dispatch = useDispatch();

  const handleContentChange = (e, fieldName) => {
    if (fieldName === 'list-type') {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            value,
            listType: e.target.value
          }
        }
      });
    }
  };

  const handleItemContentChange = (e, targetIndex) => {
    const oldList = [...value];
    const newList = oldList.map((item, index) => {
      if (targetIndex === index) {
        item = e.target.value;
      }

      return item;
    });

    dispatch({
      type: 'CHANGE_ELEMENT_CONTENT',
      payload: {
        sid,
        data: {
          value: newList,
          listType
        }
      }
    });
  };

  const handleAddListItem = () => {
    dispatch({
      type: 'CHANGE_ELEMENT_CONTENT',
      payload: {
        sid,
        data: {
          value: [...value, ''],
          listType
        }
      }
    });
  };

  const handleDeleteListItem = (targetIndex) => {
    const oldList = [...value];
    const newList = oldList.filter((item, index) => {
      return targetIndex !== index;
    });

    //Empty list, remove from markdown list
    if (newList.length === 0) {
      dispatch({
        type: 'DELETE_ELEMENT',
        payload: {
          sid
        }
      });
    } else {
      dispatch({
        type: 'CHANGE_ELEMENT_CONTENT',
        payload: {
          sid,
          data: {
            value: newList,
            listType
          }
        }
      });
    }
  };

  const renderListItem = value.map((item, index) => {
    return (
      <li key={index}>
        <input
          className='list-item-input'
          onChange={(e) => handleItemContentChange(e, index)}
          value={item}
          type='text'
          placeholder='List content goes here...'
        />
        <button
          className='delete-list-item-btn'
          onClick={(e) => handleDeleteListItem(index)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </li>
    );
  });

  const listClassName =
    listType === 'ul' ? 'list-container ul-style' : 'list-container ol-style';

  return (
    <div className='main-content'>
      <div className='list-radio-input-group'>
        <span>List type:&nbsp;</span>
        <input
          onChange={(e) => handleContentChange(e, 'list-type')}
          type='radio'
          id='ul-radio'
          name='list-type'
          value='ul'
          checked={listType === 'ul'}
        />
        <label htmlFor='ul-radio'>Unordered</label>
        <input
          onChange={(e) => handleContentChange(e, 'list-type')}
          type='radio'
          id='ol-radio'
          name='list-type'
          value='ol'
          checked={listType === 'ol'}
        />
        <label htmlFor='ol-radio'>Order</label>
      </div>
      <ul className={listClassName}>{renderListItem}</ul>
      <button onClick={handleAddListItem} className='add-list-item-btn'>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    </div>
  );
};

export default ListElement;
