import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCountries, selectSearchTerm } from '../../../store/slices/app.slices';
import { filteredCountries } from '../../../helpers/countries.helpers';

import s from './CountriesListDesktop.module.scss'

const CountriesListDesktop = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const countries = useSelector(selectCountries)
    const filtered = filteredCountries(countries, searchTerm);    

    const handleCountryClick = (countryName) => {
        navigate(`/${countryName}`);
        dispatch(setSearchTerm(''));
        dispatch(setIsSearching(false))
    };

    return (
        <div className={s.countriesList}>
            <ul className={s.list}>
                {filtered && filtered.length > 0 ? (
                    filtered.map((country) => (
                            <li 
                            className={s.countryItem} 
                            key={country.name.common} 
                            onClick={() => handleCountryClick(country.name.common)} 
                            style={{cursor: 'pointer'}}
                            >
                                {country.name.common}
                            </li>
                    ))) : 
                (
                    <li className={s.noMatch}>No matching countries found.</li>
                )}
            </ul>
        </div>
    );
  };


export default CountriesListDesktop;