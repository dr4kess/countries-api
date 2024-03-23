import { useSelector } from 'react-redux'
import { selectIsMobile } from '../../store/slices/app.slices'

import FooterDesktop from './FooterDesktop/FooterDesktop'
import FooterMobile from './FooterMobile/FooterMobile'


const Footer = () => {
    const isMobile = useSelector(selectIsMobile)
    return isMobile ? <FooterMobile /> : <FooterDesktop/>
}

export default Footer;