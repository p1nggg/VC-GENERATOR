import React, { useState } from 'react';

import './BurgerMenu.css';
import Menu from '../Menu/Menu';

const BurgerMenu = ({header, items}) => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div>
      <div className='burger-btn' onClick={() => {
        setMenuActive(!menuActive)
        document.body.classList.add("disable-scroll")

        }}>
      <span></span>
    </div>
    <Menu className="menu" active={menuActive} setActive={setMenuActive} header={header} items={items}/>
    </div>
    
    
  );
};

export default BurgerMenu;
