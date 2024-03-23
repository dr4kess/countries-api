import { useSelector } from "react-redux"

import { selectIsMobile, selectIsSearching } from "../../store/slices/app.slices"

import CountriesList from "../CountriesList/CountriesList"
import Hero from "./Hero/Hero"

const MainPage = () => {
    const isMobile = useSelector(selectIsMobile)
    const isSearching = useSelector(selectIsSearching)
    return isMobile && isSearching ? <CountriesList/> : <Hero/>
}

export default MainPage;