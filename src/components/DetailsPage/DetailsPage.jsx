import { useSelector } from "react-redux"

import { selectIsMobile } from "../../store/slices/app.slices"
import { selectIsSearching } from "../../store/slices/search.slices"

import CountriesListMobile from "../CountriesList/CountriesListMobile/CountriesListMobile"
import CountryDetails from "./CountryDetails/CountryDetails"

const DetailsPage = () => {
    const isMobile = useSelector(selectIsMobile);
    const isSearching = useSelector(selectIsSearching);
    
    return isMobile && isSearching ? <CountriesListMobile/> : <CountryDetails/>
}
export default DetailsPage;