import { useHistory } from "react-router-dom";
import './../../css/Logout.css'



const Logout = () => {

    const history = useHistory()
    const handleOnClick = () => {
        localStorage.removeItem('token');
        history.push('/')
    }
    
    return (
        <div>
            <button className='logout' onClick={e => handleOnClick(e, 'value')}>Logout</button>
        </div>
    );
}
 
export default Logout;