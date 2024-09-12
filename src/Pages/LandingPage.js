import '../PagesCSS/Pages.css';
import LoginButton from './Components/LoginButton';


function LandingPage() {
    return (
        <div className='LandingPage'>
             <h1>Let's read some yuri! </h1>
             <div className='LoginButton'>
                <LoginButton></LoginButton>
             </div>
        </div>
    )
}
export default LandingPage; 