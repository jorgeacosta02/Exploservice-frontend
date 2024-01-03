import styles from './_EAMenu.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { booleanState } from '../../../redux/reducers';
import { toggleStyle } from '../../../redux/actions';

const EAMenuComp = () => {

  const dispatch = useDispatch<any>();
  const stylesReducer = useSelector(( state: booleanState ) => state.styles);

  console.log(stylesReducer);

  const handleClick = () => {
    dispatch(toggleStyle() );
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
