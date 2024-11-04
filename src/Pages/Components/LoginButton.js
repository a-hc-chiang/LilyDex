import { useNavigate } from "react-router-dom";
import SignInPage from "../SignInPage";
import '../../PagesCSS/Buttons.css';

function LoginButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("../login");
        //how to move to sign in page 
    }

    return(
        <div className='LoginButtonDiv'>
            <button type="button" onClick={handleClick} div className='LoginButton'>
        Login
            </button>
        </div>

    );
}

export default LoginButton