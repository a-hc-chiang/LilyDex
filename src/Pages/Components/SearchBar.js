import '../../PagesCSS/Buttons.css';
import { useNavigate } from 'react-router-dom';
import SearchResultsPage from '../SearchResultsPage';
import React, {useState} from 'react';
import XButton from './Xbutton';

function SearchBar() {
    const navigate = useNavigate(); 
    const [searchInput, setSearchInput] = useState("");
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        // navigate("../SearchResults/" + searchInput);
    };

    const navigateToResults = (e) => {
        navigate("../SearchResults/" + searchInput);
    };
    
    return (
        <div className='SearchBar'>
            <input
                className='SearchBarInput'
                type="text"
                placeholder="Search for series"
                onChange={handleChange}
                value={searchInput} />
            <button className='SearchBarButton' onClick={navigateToResults}>
                {/* Enter */}
                <p className='SearchBarButtonText'>
                    Enter
                </p>
            </button>
        </div>
    );

}
export default SearchBar; 