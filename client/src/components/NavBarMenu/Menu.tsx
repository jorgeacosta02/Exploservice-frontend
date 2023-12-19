import styles from './_Menu.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/types';

const Menu = () => {

  const dispatch = useDispatch();
  const isStyleApplied = useSelector(( state: RootState ) => state.styles);

  return (
    <div  >
      <svg
        className={styles.menu}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="3 3 18 18" 
        // onClick={handleClick}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </div>
  )
}

export default Menu
