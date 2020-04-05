import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';

const HeaderRightMenu = () => {
  const markdownList = useSelector((state) => state.markdownList);
  const dispatch = useDispatch();

  //Load local storage to get user saved file
  useEffect(() => {
    const loadedListData = localStorage.getItem('markdown-list');

    if (loadedListData) {
      const modifiedList = JSON.parse(atob(loadedListData));
      if (modifiedList.length > 0) {
        dispatch({
          type: 'UPDATE_NEW_LIST',
          payload: { modifiedList },
        });
      }
    }
  }, [dispatch]);

  const handleEmpty = () => {
    const isEmpty = window.confirm('Are you sure want to empty the file?');
    if (isEmpty) {
      dispatch({ type: 'RESET_LIST' });
    }
  };

  const handleSave = () => {
    //Set local storage to store user saved file
    const encodeListData = btoa(JSON.stringify(markdownList));
    localStorage.setItem('markdown-list', encodeListData);
    toast.success('File saved!', {
      className: 'success-toast',
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleExport = () => {
    dispatch({ type: 'TOGGLE_RESULT_VIEW' });
  };

  return (
    <div className='review-view-header'>
      <ul className='option-list'>
        <li>
          <button onClick={handleEmpty} className='empty-btn'>
            <FontAwesomeIcon icon={faTrashAlt} />
            <span>Empty</span>
          </button>
        </li>
        <li>
          <button onClick={handleSave} className='save-btn'>
            <FontAwesomeIcon icon={faSave} />
            <span>Save</span>
          </button>
        </li>
        <li>
          <button onClick={handleExport}>
            <FontAwesomeIcon icon={faCheck} />
            <span>Done & Export</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderRightMenu;
