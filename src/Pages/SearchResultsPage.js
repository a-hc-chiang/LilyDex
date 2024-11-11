import { useEffect, useState } from 'react';
import '../PagesCSS/Pages.css';
import { useParams } from 'react-router-dom';
import LoginButton from './Components/LoginButton';
import SearchBar from './Components/SearchBar';
import IFLButton from './Components/IFLButton';
import XButton from './Components/Xbutton';

function SearchResultsPage() {
    const [data, setData] = useState(null);
    const [table, setTable] = useState(null);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(); 
    const {inputVal} = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/search?q=' + inputVal);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                // console.log(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },[])

    useEffect(() => {
        if (data == null) {
            return; 
        }

        let animeList = [];
        data.forEach(function(i) {
            animeList.push(
                <div className='SeriesOuter'>
                    <div className='SeriesImageDiv'>
                        <img src={i.cover} className='SeriesImage'></img>
                    </div>
                    <div className='SeriesTextDiv'>
                        <div className='SeriesTitleDiv'>
                            <h1 className='SeriesTitle'>{i.seriesname.replace(/([a-z])([A-Z])/g, "$1 / $2")}</h1>
                        </div>
                        <div className='SeriesSynoposisDiv'>
                            <p className='SeriesSynoposis'>
                                Synopsis:
                            </p>
                            <p className='ActualSeriesSynoposis'>
                                {i.summary.replace(/<[^>]*>/g, "")}
                            </p>
                        </div>
                        <div className='PublicationTextDiv'>
                            <div className='PublicationStatusDiv'>
                                <p className='PublicationStatus'>
                                    <b>
                                        Series status:  
                                    </b>
                                        {" " + i.seriesstatus}
                                    </p>
                            </div>
                            <div className='CreationDateDiv'>
                                <p className='CreationDate'>
                                    <b>
                                        Publication date: 
                                    </b> 
                                    {" " + i.creationdate}
                                </p>
                            </div>

                        </div>
                        <div className='SeriesTypeDiv'>
                            <p className='SeriesType'>
                                <b>
                                    Series type: 
                                </b>
                                {" " + i.seriestype}
                            </p>
                        </div>

                    </div>
                </div>
            );
          });
        setTable(animeList)
    }, [data])

    return (
        <div className = 'SearchResultsPage'>
            <div className='LoginDiv'>
                <LoginButton></LoginButton>
            </div>
            
            <div className='SearchBarCompleteDiv'>
                <div className='SearchBarDivSearchResultsPage'>
                    <SearchBar className='SearchBarResulstPage'></SearchBar>
                </div>
                <div className='XButtonSeachResults'>
                    <XButton></XButton>
                </div>
            </div>

            <div className='IFLButtonSearchResults'>
                <IFLButton className='IFLButtonSearchResultsPage'></IFLButton>
            </div>

            {/* <p>{JSON.stringify(data)}</p>
            {table} */}
            <div className='SearchResultsDiv'>
                {table}
            </div>
        </div>
    )
}
export default SearchResultsPage; 