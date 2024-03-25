import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCountries } from '../../../store/slices/app.slices';
import { setSearchTerm, setIsSearching } from '../../../store/slices/search.slices';
import { formatCurrencies } from '../../../helpers/app.helpers';

import s from './CountryDetails.module.scss'

const CountryDetails = () => {
    const dispatch = useDispatch()
    const { countryName } = useParams();
    const countries = useSelector(selectCountries)    
    const [detailsVisibility, setDetailsVisibility] = useState({
        flag: false,
        currency: false,
        population: false,
        capital: false
    });

    const countryDetails = countries.find(country => 
        country.name.common === countryName 
    );
    
    useEffect(() => {
        dispatch(setSearchTerm(''))
        dispatch(setIsSearching(false))
    }, [])


    useEffect(() => {
        dispatch(setSearchTerm(''));
        dispatch(setIsSearching(false));
    }, [dispatch, setSearchTerm, setIsSearching]);
    
    const toggleDetail = (detail) => {
        setDetailsVisibility(prevState => ({
            ...prevState,
            [detail]: !prevState[detail]
        }));
    };
    

    return (
        
        <div className={s.countryDetails}>
            <div className={s.column}>
                <h1 className={s.detailsHeader}>{countryName}</h1>
                <div onClick={() => toggleDetail('flag')} className={s.detailBox}>
                    <h3>Flag</h3>
                    <span className={s.arrow} style={{ transform: detailsVisibility.flag ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        &#8595;
                    </span>
                    {detailsVisibility.flag && <img className={s.flag} src={countryDetails.flags.png} alt={`${countryName} flag`} />}
                </div>
                <div onClick={() => toggleDetail('currency')} className={s.detailBox}>
                    <h3>Currency</h3>
                    <span className={s.arrow} style={{ transform: detailsVisibility.currency ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        &#8595;
                    </span>
                    {detailsVisibility.currency && <p>{formatCurrencies(countryDetails.currencies)}</p>}
                </div>
                <div onClick={() => toggleDetail('population')} className={s.detailBox}>
                    <h3>Population</h3>
                    <span className={s.arrow} style={{ transform: detailsVisibility.population ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        &#8595;
                    </span>
                    {detailsVisibility.population && <p>{countryDetails.population}</p>}
                </div>
                <div onClick={() => toggleDetail('capital')} className={s.detailBox}>
                    <h3>Capital</h3>
                    <span className={s.arrow} style={{ transform: detailsVisibility.capital ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        &#8595;
                    </span>
                    {detailsVisibility.capital && <p>{countryDetails.capital}</p>}
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;