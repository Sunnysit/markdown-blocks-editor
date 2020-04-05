import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Component for controlling mobile display single view per time
const ViewSwitchButton = () => {
  const dispatch = useDispatch();
  const currentDisplayMode = useSelector((state) => state.currentDisplayMode);

  const [modeIcon, setModeIcon] = useState(faEye);
  const [buttonClasses, setButtonClasses] = useState(
    'view-switch-btn preview-mode'
  );

  const handleClick = () => {
    if (currentDisplayMode === 'edit') {
      setModeIcon(faEdit);
      setButtonClasses('view-switch-btn edit-mode');
      dispatch({ type: 'CHANGE_DISPLAY_MODE', payload: 'preview' });
    } else {
      setModeIcon(faEye);
      setButtonClasses('view-switch-btn preview-mode');
      dispatch({ type: 'CHANGE_DISPLAY_MODE', payload: 'edit' });
    }
  };

  return (
    <button onClick={handleClick} className={buttonClasses}>
      <FontAwesomeIcon icon={modeIcon} />
    </button>
  );
};

export default ViewSwitchButton;
