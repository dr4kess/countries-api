import logo from '../../../assets/images/project-logo.png'

import s from './FooterMobile.module.scss'

const FooterMobile = () => {
    return (
        <div className={s.footer}>
            <div className={s.column}>

                    <div className={s.logoWrapper}>
                        <img src={logo} className={s.logo} alt='Logo'/>
                    </div>

                    <div className={s.updatesSide}>
                        <p className={s.updatesText}>Updates right to your Inbox</p>
                        
                        <div className={s.searchSection}>
                            <input placeholder='Your Email Here' className={s.search}></input>
                            <div className={s.searchButtonWrapper}>
                                <div className={s.searchButton} style={{cursor: 'pointer'}}>Search</div>
                            </div>
                        </div>
                    </div>

                    <div className={s.infoSide}>
                        <div className={s.infoSectionsWrapper}>
                            <div className={s.miniLogoWrapper}>
                                <p className={s.infoSection}>© 2024</p>
                            <img className={s.miniLogo} src={logo} alt='Logo'/>
                            </div>
                            <p className={s.infoSection}>Privacy policy</p>
                            <p className={s.infoSection}>Cookies policy</p>
                            <p className={s.infoSection}>Terms of use</p>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default FooterMobile;