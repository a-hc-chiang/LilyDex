import '../PagesCSS/Pages.css';
import IFLButton from './Components/IFLButton';
import LoginButton from './Components/LoginButton';
import SearchBar from './Components/SearchBar';


function LandingPage() {
    return (
        <div className='LandingPage'>
             <div className='LoginButtonClass'>
                <LoginButton className='LoginButton'></LoginButton>
             </div>
             <div>
                <h1 className='LandingPageTitle'>Yuridex</h1>
             </div>
             <div className='SearchBarClass'>
                <SearchBar></SearchBar> 
                {/* work on some of the css from compoenent directly */}
             </div>
             <div className='IFLButton'>
                <IFLButton></IFLButton>
             </div>
        </div>
    )
}
export default LandingPage; 