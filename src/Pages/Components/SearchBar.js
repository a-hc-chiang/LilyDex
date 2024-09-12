import '../../PagesCSS/Buttons.css';
import { useNavigate } from 'react-router-dom';
import SearchResultsPage from '../SearchResultsPage';

function SearchBar() {
    const navigate = useNavigate(); 
    let searchKeyword = '';
    const searchBar = () => {}


    function handleClick() {
        navigate("../searchResults/" + searchKeyword);
    }

    return (
        <div className='SearchBar'>
            <SearchBar>

            </SearchBar>
        </div>
    );

}
export default SearchBar; 