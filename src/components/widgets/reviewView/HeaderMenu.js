import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const HeaderMenu = () => {
  const dispatch = useDispatch();

  const handleEmpty = () => {
    const isEmpty = window.confirm('Are you sure want to empty the file?');
    if (isEmpty) {
      dispatch({ type: 'RESET_LIST' });
    }
  };

  return (
    <div className="review-view-header">
      <ul className="option-list">
        <li>
          <button onClick={handleEmpty} className="empty-btn">
            <FontAwesomeIcon icon={faTrashAlt} />
            <span>Empty</span>
          </button>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faCheck} />
            <span>Export Markdown Text</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
