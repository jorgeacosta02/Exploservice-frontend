import { useDispatch, useSelector } from "react-redux"
import { ESState } from "../../../redux/reducers/ESReducer";


const ESServiceCards = () => {

    const dispatch = useDispatch();

    const services = useSelector((state: ESState) => state.services)

    return (
        <div>
        
        </div>
    )
}

export default ESServiceCards
