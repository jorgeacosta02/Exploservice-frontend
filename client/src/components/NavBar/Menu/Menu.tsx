import styles from '../../NavBar/_NavBar.module.scss';

const Menu = () => {
  return (
    <div  className={styles.menu}>
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        width="130" 
        height="30" 
        viewBox="0 0 24 24" 
        style={{ fill: '#e61515', display: 'none' }}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
      <img src="../../../assets/images/menu.png" alt="" />    
    </div>
  )
}

export default Menu
