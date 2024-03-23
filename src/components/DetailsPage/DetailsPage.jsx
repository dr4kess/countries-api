import { useSelector } from "react-redux"

import { selectIsMobile, selectIsSearching } from "../../store/slices/app.slices"

import CountriesListMobile from "../CountriesList/CountriesListMobile/CountriesListMobile"
import CountryDetails from "./CountryDetails/CountryDetails"

const DetailsPage = () => {
    const isMobile = useSelector(selectIsMobile);
    const isSearching = useSelector(selectIsSearching);
    
    return isMobile && isSearching ? <CountriesListMobile/> : <CountryDetails/>
}
export default DetailsPage;