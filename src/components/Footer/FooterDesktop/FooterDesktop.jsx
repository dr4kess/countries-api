import logo from '../../../assets/images/project-logo.png'

import s from './FooterDesktop.module.scss'

const FooterDesktop = () => {
    return (
        <div className={s.footer}>
            <div className={s.column}>
                <div className={s.infoSide}>
                    <div className={s.logoWrapper}>
                        <img src={logo} className={s.logo} alt='Logo'/>
                    </div>
                    <div className={s.infoSectionsWrapper}>
                        <p className={s.infoSection}>©</p>
                        <div className={s.miniLogoWrapper}>
                            <img className={s.miniLogo} src={logo} alt='Logo'/>
                            <p className={s.infoSection}>2024</p>
                        </div>
                        <p className={s.infoSection}>Privacy policy</p>
                        <p className={s.infoSection}>Cookies policy</p>
                        <p className={s.infoSection}>Terms of use</p>
                    </div>
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
            </div>
        </div>
    )
}

export default FooterDesktop;