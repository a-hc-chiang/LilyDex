import '../PagesCSS/Pages.css';

function SignUpPage() {
    function checkInputs() { 
        // checks if all inputs exist and if confirm values match 
        let inputFields = [
            document.getElementById("UserField"), 
            document.getElementById("SignUpEmailInput"),
            document.getElementById("ConfirmSignUpEmailInputField"),
            document.getElementById('SignUpBirthdayInputField'),
            document.getElementById("PasswordField"),
            document.getElementById("ConfirmPasswordField")
        ]; 
        if (!inputFields.every(input => input && input.value)) {
            return false; 
        }
        if (inputFields[1].value != inputFields[2].value || inputFields[4].value != inputFields[5].value) {
            return false; 
        }
        return true; 
    }

    function handleClick() {
        //make the new user conver to json + send it off
        //checking req fields: 
        if (checkInputs()) {
            const fetchData = async () => {
                try {
                    // accountname: document.getElementById("UserField"),
                    const jsonObject = {
                        
                        accountname: document.getElementById("UserField").value, 
                        email: document.getElementById("SignUpEmailInput").value,
                        password: document.getElementById("PasswordField").value,
                        birthday: document.getElementById("SignUpBirthdayInputField").value
                    };
                    const response = await fetch('http://127.0.0.1:5000/signup', {
                        method: "POST", 
                        body: JSON.stringify(jsonObject),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const result = await response.json();
                    console.log(result);
                } catch (error) {
                    console.log(error);
                    // setError(error);
                } finally {
                    console.log("hi");
                    // setLoading(false);
                }
            };
            fetchData();
        } else {
            console.log("Invalid inputs!");
        }
    }

    return (
        <div className = 'SignUpPage'>
            
            <div className='SignUpBox'>
                <div className='SignInTitle'>
                    <h1>Sign Up</h1>
                </div>

                <div className='SignUpInput' id ="SignUpUsername">
                    <div className="InputText">
                        <p>Username</p>
                    </div>
                    <input className="InputField" id="UserField"></input>
                </div>

                <div className='SignUpEmailInput' id='SignUpEmail'>
                    <div className="InputText">
                        <p>Email</p>
                    </div>
                    <input className="InputField" id="SignUpEmailInput"></input>
                </div>

                <div className='SignUpConfirmEmailInput' id='SignUpEmailConfirm'>
                    <div className="InputText">
                        <p>Confirm email</p>
                    </div>
                    <input className="InputField" id="ConfirmSignUpEmailInputField"></input>
                </div>

                <div className='SignUpBirthdayInput' id='SignUpBirthday'>
                    <div className="InputText">
                        <p>Birthday</p>
                    </div>
                    <input className="InputField" id='SignUpBirthdayInputField'></input>
                </div>
                <div className='SignInInput' id ="SignInPassword">
                    <div className="InputText">
                        <p>Password</p>
                    </div>
                    <input className="InputField" id="PasswordField"></input>
                </div>
                <div className='SignInInput' id ="SignInPasswordConfirm">
                    <div className="InputText">
                        <p>Confirm password</p>
                    </div>
                    <input className="InputField" id="ConfirmPasswordField"></input>
                </div>
                <div className='SignInButtonClass'>
                    <button className='SignInButton' onClick={handleClick}>
                        Create account
                    </button>
                </div>
                
                {/* <input></input> */}
            </div>
        </div>
    )
}
export default SignUpPage; 