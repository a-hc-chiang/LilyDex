import '../../PagesCSS/Buttons.css';
import { useNavigate } from 'react-router-dom';

function IFLButton () {
    const navigate = useNavigate(); 

    function handleClick() {
        navigate("../series/");
        //how to move to sign in page 
    }

    return (
        <div className='IFLButton'>
            <button type="button" onClick={handleClick}>
                I'm feeling lucky
            </button>
        </div>
    )
}
export default IFLButton; 