import styles from './_EAMenu.module.scss';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../../redux/slices/menuSlice';


const EAMenuComp = () => {

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    dispatch(toggleMenu() );
  };

  return (
    <div  >
      <svg
        className={styles.menu}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="3 3 18 18" 
        onClick={handleClick}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </div>
  )
}

export default EAMenuComp
