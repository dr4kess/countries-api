import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectCountries, selectIsMobile, selectIsSearching, selectSearchTerm, setIsSearching, setSearchTerm } from '../../store/slices/app.slices'

import CountriesList from '../CountriesList/CountriesList'

import logo from '../../assets/images/project-logo.png'

import s from './Header.module.scss'


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const isMobile = useSelector(selectIsMobile)
    const searchTerm = useSelector(selectSearchTerm)
    const isSearching = useSelector(selectIsSearching)
    const countries = useSelector(selectCountries)
  
    const handleSearchChange = (e) => {
        const value = e.target.value;
        dispatch(setSearchTerm(value));
        dispatch(setIsSearching(value.length > 0));
    };
    
    return (
        <div className={s.header}>
            <div className={s.column}>
                <div className={s.logoWrapper}>
                    <img src={logo} className={s.logo} alt='Logo' onClick={() => navigate('/')} style={{cursor: 'pointer'}}/>
                </div>
                
                <div className={s.searchSection}>
                        <input value={searchTerm} type="text" placeholder='Search for Country' className={s.search} onChange={handleSearchChange}/>
                    <div className={s.searchButtonWrapper}>
                        {!isMobile ? <div className={s.searchButton} style={{cursor: 'pointer'}}>Search</div> : null}
                    </div>
                        {isSearching && !isMobile ? <CountriesList /> : null}
                </div>
            </div>

        </div>
    )
}

export default Header;