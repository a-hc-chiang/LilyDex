import '../PagesCSS/Pages.css';
import { useNavigate } from "react-router-dom";

function SignInPage () {
    const navigate = useNavigate();

    function handleClick() {
        navigate("../signUp");
        //how to move to sign up page 
    }

    return (
        <div className = 'SignInPage'>
            
            <div className='SignInBox'>
                <div className='SignInTitle'>
                    <h1>Sign In</h1>
                </div>
                <div className='SignInInput' id ="SignInUsername">
                    <div className="InputText">
                        <p> Username/Email</p>
                    </div>
                    <input className="InputField" id="UserField"></input>
                </div>
                <div className='SignInInput' id ="SignInPassword">
                    <div className="InputText">
                        <p> Password</p>
                    </div>
                    <input className="InputField" id="PasswordField"></input>
                </div>
                <div className='SignInButtonClass'>
                    <button className='SignInButton'>
                        Login
                    </button>
                </div>
                <div className='CreateAccountButtonClass'>
                    <button className='CreateAccountButton' onClick={handleClick}>
                        Create account
                    </button>
                </div>
                
                {/* <input></input> */}
            </div>
        </div>
    )
}
export default SignInPage; 