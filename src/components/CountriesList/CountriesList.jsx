import { useSelector } from 'react-redux';

import { selectIsMobile } from '../../store/slices/app.slices';


import CountriesListMobile from './CountriesListMobile/CountriesListMobile';
import CountriesListDesktop from './CountriesListDesktop/CountriesListDesktop';

const CountriesList = () => {

    const isMobile = useSelector(selectIsMobile)

    return isMobile ? <CountriesListMobile/> : <CountriesListDesktop/>

  };


export default CountriesList;