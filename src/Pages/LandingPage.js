import '../PagesCSS/Pages.css';
import IFLButton from './Components/IFLButton';
import LoginButton from './Components/LoginButton';
import SearchBar from './Components/SearchBar';


function LandingPage() {
    return (
      <div className='OuterLandingPage'>
         <div className='LoginButtonClassLandingPage'>
            <LoginButton className='LoginButtonLandingPage'></LoginButton>
         </div>
         <div className='LandingPage'>
             <div className='LandingPageDiv'>
                <h1 className='LandingPageTitle'>Yuridex</h1>
             </div>
             <div className='paddingDiv1'></div>
             <div className='SearchBarClass'>
                <SearchBar></SearchBar> 
                {/* work on some of the css from compoenent directly */}
             </div>
             {/* <div className='paddingDiv1'></div> */}
             <div className='IFLButtonLandingPage'>
                <IFLButton></IFLButton>
             </div>
        </div>
      </div>
    )
}
export default LandingPage; 