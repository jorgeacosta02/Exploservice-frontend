import styles from './_Menu.module.scss';
import { useState } from 'react';

const Menu = () => {

  const [style, setStyle] = useState(true);

  const handleClick = () => {
    setStyle((prevStyle) => !prevStyle);
  }

  const containerClass = style ? `${styles.menu} ${styles.hide}` : styles.menu;

  return (
    <div  >
      <svg
        className={containerClass}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        onClick={handleClick}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </div>
  )
}

export default Menu
