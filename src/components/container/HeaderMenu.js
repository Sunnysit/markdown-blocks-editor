import React from 'react';

import HeaderLeftMenu from '../widgets/editView/HeaderLeftMenu';
import HeaderRightMenu from '../widgets/previewView/HeaderRightMenu';

const HeaderMenu = () => {
  return (
    <div className='header-menu'>
      <HeaderLeftMenu />
      <HeaderRightMenu />
    </div>
  );
};

export default HeaderMenu;
