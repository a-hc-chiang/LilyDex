import '../../PagesCSS/Buttons.css';
import { useNavigate } from 'react-router-dom';

function IFLButton () {
    const navigate = useNavigate(); 

    function handleClick() {
        navigate("../series/");
        //how to move to sign in page 
    }

    return (
        <div className='IFLButtonClass'>
            <button type="button" className='IFLButton' onClick={handleClick}>
                I'm feeling lucky
            </button>
        </div>
    )
}
export default IFLButton; 