import styles from './_Menu.module.scss';

const Menu = () => {
  return (
    <div  >
      <svg
        className={styles.menu}
        xmlns="http://www.w3.org/2000/svg" 
        // width="230" 
        // height="230" 
        viewBox="0 0 24 24" 
        // style={{ fill: '#e61515' }}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </div>
  )
}

export default Menu
